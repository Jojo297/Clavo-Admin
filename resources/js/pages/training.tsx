import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Training',
        href: '/training',
    },
];

export default function Training() {
    const GITHUB_NOTEBOOK_VIEWER_URL =
        'https://nbviewer.org/urls/gist.githubusercontent.com/Jojo297/38f574df3fde1685cae78a5ca4908ad6/raw/af65d4b2cb77f829f059db676af7f6f0abb23421/training_efficientdet_lite2.ipynb';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="flex justify-between">
                        <h1 className="mb-3.5 text-2xl font-bold">Training Models</h1>
                    </div>

                    <iframe
                        src={GITHUB_NOTEBOOK_VIEWER_URL}
                        title="Gist Notebook Viewer"
                        className="w-full"
                        // Gist viewer biasanya memerlukan tinggi yang cukup besar
                        style={{ height: '1500px', border: 'none' }}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
