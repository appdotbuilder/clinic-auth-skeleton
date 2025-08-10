import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Clinic Pharmacy Management System">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-50 to-white p-6 text-gray-800 lg:justify-center lg:p-8 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
                <header className="mb-6 w-full max-w-6xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                                <span className="text-xl font-bold">🏥</span>
                            </div>
                            <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                                ClinicPharm
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <div className="flex w-full max-w-6xl flex-col items-center justify-center lg:flex-row lg:items-start lg:space-x-12">
                    {/* Hero Section */}
                    <div className="mb-12 flex-1 text-center lg:mb-0 lg:text-left">
                        <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                            🏥 Clinic Pharmacy
                            <span className="block text-blue-600 dark:text-blue-400">
                                Management System
                            </span>
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                            Streamline your clinic and pharmacy operations with our comprehensive management system. 
                            Built for healthcare professionals who demand efficiency and reliability.
                        </p>
                        
                        {!auth.user && (
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-xl transition-all hover:bg-blue-700 hover:shadow-2xl hover:scale-105"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="inline-flex items-center justify-center rounded-lg border-2 border-blue-600 bg-transparent px-8 py-4 text-lg font-medium text-blue-600 transition-all hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                                >
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Features Section */}
                    <div className="flex-1">
                        <div className="rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800">
                            <h2 className="mb-6 text-2xl font-bold text-center">
                                🎯 Key Features
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                        <span className="text-green-600 dark:text-green-400">👨‍⚕️</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                            Doctor Dashboard
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Manage patient records, prescriptions, and appointments
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                        <span className="text-purple-600 dark:text-purple-400">🔧</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                            Admin Control
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Full system management, user roles, and reporting
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                        <span className="text-blue-600 dark:text-blue-400">💰</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                            Cashier System
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Process payments, manage inventory, and sales tracking
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                                        <span className="text-yellow-600 dark:text-yellow-400">🔒</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                                            Secure & Compliant
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            HIPAA-compliant data security and user authentication
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Role-based Access Info */}
                        <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-900/20 dark:to-purple-900/20">
                            <h3 className="mb-4 text-lg font-semibold text-center">
                                👥 Role-Based Access
                            </h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl mb-2">👨‍⚕️</div>
                                    <div className="text-sm font-medium">Doctor</div>
                                </div>
                                <div>
                                    <div className="text-2xl mb-2">🔧</div>
                                    <div className="text-sm font-medium">Admin</div>
                                </div>
                                <div>
                                    <div className="text-2xl mb-2">💰</div>
                                    <div className="text-sm font-medium">Cashier</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="mb-4">
                        <div className="mb-2 text-lg">🚀 Ready to get started?</div>
                        <p>Join healthcare professionals who trust ClinicPharm for their daily operations</p>
                    </div>
                    Built with ❤️ by{" "}
                    <a 
                        href="https://app.build" 
                        target="_blank" 
                        className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                        app.build
                    </a>
                </footer>
            </div>
        </>
    );
}