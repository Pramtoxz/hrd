<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckMenuAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();
        
        if (!$user || !$user->user_level_id) {
            abort(403, 'Unauthorized access.');
        }

        // Get current route name
        $routeName = $request->route()->getName();
        
        if (!$routeName) {
            return $next($request);
        }
        
        // Extract base route (e.g., 'menus.index' -> 'menus', 'user-levels.create' -> 'user-levels')
        $baseRoute = explode('.', $routeName)[0] ?? null;
        
        if (!$baseRoute) {
            return $next($request);
        }

        // Check if user level has access to this menu
        $hasAccess = \DB::table('menus')
            ->join('menu_user_level', 'menus.id', '=', 'menu_user_level.menu_id')
            ->where('menu_user_level.user_level_id', $user->user_level_id)
            ->where('menus.status_aktif', true)
            ->where(function($query) use ($baseRoute) {
                // Match route name or URL
                $query->where('menus.route', 'like', $baseRoute . '%')
                      ->orWhere('menus.url', 'like', '/' . $baseRoute . '%')
                      ->orWhere('menus.url', 'like', '/' . str_replace('-', '_', $baseRoute) . '%');
            })
            ->exists();

        if (!$hasAccess) {
            return redirect()->route('dashboard')->with('error', 'Anda tidak memiliki akses ke halaman ini.');
        }

        return $next($request);
    }
}
