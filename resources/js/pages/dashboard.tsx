import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AddModels from './dashboard/add-models';
import TableModel from './dashboard/table-model';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="flex justify-between">
                        <h1 className="mb-3.5 text-2xl font-bold">Models</h1>
                        <AddModels />
                    </div>
                    <TableModel />
                </div>
            </div>
        </AppLayout>
    );
}
