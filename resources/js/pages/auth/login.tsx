import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { Form, Head } from '@inertiajs/react';
import { LogIn } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({ status }: LoginProps) {
    return (
        <>
            <Head title="Login - App HRD" />
            
            <div className="min-h-screen flex">
                {/* Left Side - Login Form */}
                <div className="flex-1 flex items-center justify-center p-8 bg-white">
                    <div className="w-full max-w-md space-y-8">
                        {/* Logo & Title */}
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <div className="bg-white p-4 rounded-2xl shadow-lg">
                                    <img 
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" 
                                        alt="Honda Logo" 
                                        className="h-16 w-16"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Sistem Manajemen HRD</h1>
                                <p className="text-gray-600 mt-2"> Berita Acara PT.Menara Agung</p>
                            </div>
                        </div>

                        {status && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm text-center">
                                {status}
                            </div>
                        )}

                        {/* Login Form */}
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-gray-700 font-medium">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                placeholder="nama@email.com"
                                                className="h-12 text-base"
                                            />
                                            <InputError message={errors.email} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="password" className="text-gray-700 font-medium">
                                                Password
                                            </Label>
                                            <Input
                                                id="password"
                                                type="password"
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="••••••••"
                                                className="h-12 text-base"
                                            />
                                            <InputError message={errors.password} />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                            />
                                            <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                                                Ingat saya
                                            </Label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner className="mr-2" />
                                                Memproses...
                                            </>
                                        ) : (
                                            <>
                                                <LogIn className="mr-2 h-5 w-5" />
                                                Masuk
                                            </>
                                        )}
                                    </Button>
                                </>
                            )}
                        </Form>

                        {/* Footer */}
                        <div className="text-center text-sm text-gray-500">
                            <p>© 2024 Honda. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
