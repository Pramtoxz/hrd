import { Head } from '@inertiajs/react';

export default function ResetPassword() {
    return (
        <>
            <Head title="Reset Password Disabled" />
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Password Reset Di Non Aktifkan</h1>
                    <p className="text-gray-600 mt-2">Mohon Hubungi IT Department</p>
                </div>
            </div>
        </>
    );
}
