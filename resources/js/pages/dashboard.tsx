import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    role: 'doctor' | 'admin' | 'cashier';
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

interface Props {
    auth: {
        user: User;
    };
    [key: string]: unknown;
}

export default function Dashboard() {
    const { auth } = usePage<Props>().props;
    const user = auth.user;

    const getRoleIcon = (role: string) => {
        switch (role) {
            case 'doctor':
                return '👨‍⚕️';
            case 'admin':
                return '🔧';
            case 'cashier':
                return '💰';
            default:
                return '👤';
        }
    };

    const getRoleTitle = (role: string) => {
        switch (role) {
            case 'doctor':
                return 'Doctor Dashboard';
            case 'admin':
                return 'Administrator Dashboard';
            case 'cashier':
                return 'Cashier Dashboard';
            default:
                return 'User Dashboard';
        }
    };

    const getRoleFeatures = (role: string) => {
        switch (role) {
            case 'doctor':
                return [
                    { icon: '📋', title: 'Patient Records', description: 'View and manage patient information' },
                    { icon: '💊', title: 'Prescriptions', description: 'Create and manage prescriptions' },
                    { icon: '📅', title: 'Appointments', description: 'Schedule and track appointments' },
                    { icon: '📊', title: 'Medical Reports', description: 'Generate patient reports' },
                ];
            case 'admin':
                return [
                    { icon: '👥', title: 'User Management', description: 'Manage doctors, cashiers, and staff' },
                    { icon: '📈', title: 'Analytics', description: 'View clinic performance metrics' },
                    { icon: '⚙️', title: 'System Settings', description: 'Configure system preferences' },
                    { icon: '🔒', title: 'Security', description: 'Monitor access and permissions' },
                ];
            case 'cashier':
                return [
                    { icon: '🛒', title: 'Point of Sale', description: 'Process patient payments' },
                    { icon: '📦', title: 'Inventory', description: 'Manage pharmacy stock' },
                    { icon: '💳', title: 'Transactions', description: 'Track daily transactions' },
                    { icon: '📄', title: 'Receipts', description: 'Generate payment receipts' },
                ];
            default:
                return [];
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Welcome Header */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="flex items-center space-x-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-md dark:bg-gray-800">
                            {getRoleIcon(user.role)}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Welcome back, {user.name}! 👋
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                {getRoleTitle(user.role)} - Ready to manage your clinic operations
                            </p>
                        </div>
                    </div>
                </div>

                {/* Role-specific Features Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {getRoleFeatures(user.role).map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-600"
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-xl mb-4 group-hover:bg-blue-200 dark:bg-blue-900 dark:group-hover:bg-blue-800">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-100">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">
                        📊 Quick Statistics
                    </h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-green-600 dark:text-green-400">Today's Activity</p>
                                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">24</p>
                                </div>
                                <div className="text-2xl">📈</div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">Active Users</p>
                                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">8</p>
                                </div>
                                <div className="text-2xl">👥</div>
                            </div>
                        </div>
                        <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-purple-600 dark:text-purple-400">System Status</p>
                                    <p className="text-lg font-semibold text-purple-900 dark:text-purple-100">Online ✅</p>
                                </div>
                                <div className="text-2xl">🔗</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Getting Started */}
                <div className="rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 p-6 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 dark:text-gray-100">
                        🚀 Getting Started
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-start space-x-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-yellow-900">
                                1
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-gray-100">Complete Your Profile</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Add your professional information and preferences</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-yellow-900">
                                2
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 dark:text-gray-100">Explore Features</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Discover all the tools available for your role</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}