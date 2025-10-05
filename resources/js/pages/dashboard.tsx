import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import AddModels from './dashboard/add-models';
import TableModel from './dashboard/table-model';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface Model {
    id: number;
    fruit_type: string;
    model_name: string;
    path: string;
}
interface ModelSearch {
    fruit_type: string | null;
    model_name: string;
}

export default function Dashboard() {
    const [Models, setModels] = useState<Model[]>([]);
    const [ModelsSearch, setModelsSearch] = useState<ModelSearch[]>([]);
    const [filteredModels, setFilteredModels] = useState<Model[]>([]); // result search from component AddModel

    useEffect(() => {
        // initialization filteredModels
        setFilteredModels(Models);
    }, [ModelsSearch]);

    const handleSearch = (searchTerm: string) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        // Filter dilakukan pada data master (ModelsSearch)
        const results = Models.filter(
            (model) =>
                (model.fruit_type ?? '').toLowerCase().includes(lowerCaseSearchTerm) ||
                (model.model_name ?? '').toLowerCase().includes(lowerCaseSearchTerm),
        );

        setFilteredModels(results);
    };

    // fetch models
    useEffect(() => {
        // Fetch models from API
        try {
            // setLoading(true);
            fetch('/api/models')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setModels(data);
                    setModelsSearch(data);
                });
        } catch (error) {
            console.log(error);
            toast.error('Failed to fetch models');
        }
    }, []);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="flex justify-between">
                        <h1 className="mb-3.5 text-2xl font-bold">Models</h1>
                        <AddModels onSearch={handleSearch} initialModels={ModelsSearch} />
                    </div>
                    <TableModel initialModels={filteredModels} />
                </div>
            </div>
        </AppLayout>
    );
}
