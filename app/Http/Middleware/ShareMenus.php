<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ShareMenus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check()) {
            $user = auth()->user();
            $userLevel = $user->userLevel;

            if ($userLevel) {
                $menus = $userLevel->menus()
                    ->where('status_aktif', true)
                    ->whereNull('parent_id')
                    ->with(['children' => function ($query) use ($userLevel) {
                        $query->where('status_aktif', true)
                            ->whereHas('userLevels', function ($q) use ($userLevel) {
                                $q->where('user_level_id', $userLevel->id);
                            })
                            ->orderBy('urutan');
                    }])
                    ->orderBy('urutan')
                    ->get();

                \Inertia\Inertia::share('menus', $menus);
            }
        }

        return $next($request);
    }
}
