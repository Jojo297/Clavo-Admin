import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { InputError } from '@/components/ui/input-error';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useForm } from '@inertiajs/react';
import { AlertCircleIcon, LoaderCircleIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

interface AddModelsProps {
    initialModels: Model[];
}

type Model = {
    id: number;
    fruit_type: string;
    model_name: string;
    path: string;
};

export default function TableModel({ initialModels }: AddModelsProps) {
    const [loading, setLoading] = useState(false);
    const [models, setModels] = useState<Model[]>(initialModels);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
    const [modelToDelete, setModelToDelete] = useState<Model | null>(null);
    const [loadingModelId, setLoadingModelId] = useState<number | null>(null);

    const { data, setData } = useForm<Model>({
        id: 0,
        fruit_type: '',
        model_name: '',
        path: '',
    });

    // download model
    const handleDownloadModel = async (e: React.MouseEvent<HTMLButtonElement>, filename: string, id: number) => {
        setLoadingModelId(id);
        e.preventDefault();

        console.log('Downloading model:', filename);

        try {
            const response = await fetch(`/api/models/download/${filename}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': import.meta.env.VITE_MODELS_API_KEY || '',
                },
            });

            if (!response.ok) {
                throw new Error(`Download failed with status: ${response.status}`);
            }

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;

            link.setAttribute('download', filename);

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);

            toast.success('Download completed!', { id: 'download-toast' });
        } catch (error) {
            console.error('Download error:', error);
            toast.error('Download failed. Please try again.');
        } finally {
            // PENTING: Kembalikan state ke null setelah selesai (baik berhasil maupun gagal)
            setLoadingModelId(null);
        }
    };

    // open dialog edit
    const handleEdit = (model: Model) => {
        setData({
            id: model.id,
            fruit_type: model.fruit_type,
            model_name: model.model_name,
            path: model.path,
        });
        setOpenDialogUpdate(true);
    };

    // update models
    const handleDeleteClick = (model: Model) => {
        setModelToDelete(model);
        setOpenDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setModelToDelete(null); // Reset state saat dialog ditutup
        setOpenDialog(false);
    };

    const submitUpdate = async (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('fruitType', data.fruit_type);
        formData.append('modelName', data.model_name);

        try {
            const response = await fetch(`/api/models-update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fruit_type: data.fruit_type,
                    model_name: data.model_name,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update model');
            }

            toast.success('Model updated successfully');
            window.location.reload();
            // Update the models state with the new data
        } catch (error) {
            console.log(error);
            toast.error('Failed to update model');
        } finally {
            setLoading(false);
        }
    };

    // delete model
    const submitDelete = async (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/models/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete model');
            }

            toast.success('Model deleted successfully');
            setModels(models.filter((m) => m.id !== id));
            // window.location.reload();
        } catch (error) {
            console.log(error);
            toast.error('Failed to delete model');
        } finally {
            setLoading(false);
            setOpenDialog(false);
        }
    };

    // data synchronization
    useEffect(() => {
        setModels(initialModels);
    }, [initialModels]);

    return (
        <div className="mt-4 flex flex-wrap justify-center gap-4">
            {models && models.length > 0 ? (
                models.map((model) => (
                    <Card key={model.id} className="max-w-sm">
                        <CardHeader>
                            <CardTitle>{model.fruit_type}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{model.model_name}</CardDescription>
                        </CardContent>
                        <CardFooter className="gap-2">
                            <Button
                                className="bg-green-500 hover:bg-green-600"
                                disabled={loadingModelId === model.id}
                                onClick={(e) => handleDownloadModel(e, model.path.split('/').pop() || '', model.id)}
                            >
                                {loadingModelId === model.id ? 'Downloading...' : 'Download'}
                            </Button>
                            {/* update model */}
                            <Dialog open={openDialogUpdate} onOpenChange={setOpenDialogUpdate}>
                                <DialogTrigger asChild>
                                    <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => handleEdit(model)}>
                                        Edit
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <form onSubmit={(e) => submitUpdate(e, model.id)} encType="multipart/form-data">
                                        <DialogHeader>
                                            <DialogTitle>Update Model {model.fruit_type}</DialogTitle>
                                            <DialogDescription className="flex">you can update the model details here</DialogDescription>
                                        </DialogHeader>
                                        <div className="mt-4 grid gap-4">
                                            <div className="grid gap-3">
                                                <Label htmlFor="fruit-type">Fruit Type</Label>
                                                <Input
                                                    id="fruit-type"
                                                    name="fruitType"
                                                    required
                                                    autoFocus
                                                    value={data.fruit_type}
                                                    onChange={(e) => setData('fruit_type', e.target.value)}
                                                    placeholder="Input Fruit Type"
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="model-name">Model Name</Label>
                                                <Input
                                                    id="model-name"
                                                    name="modelName"
                                                    required
                                                    autoFocus
                                                    value={data.model_name}
                                                    onChange={(e) => setData('model_name', e.target.value)}
                                                    placeholder="Input Model Name"
                                                />
                                            </div>
                                        </div>
                                        <DialogFooter className="mt-4">
                                            <DialogClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DialogClose>
                                            <Button type="submit" disabled={loading}>
                                                {loading ? <LoaderCircleIcon className="h-4 w-4 animate-spin" /> : 'Save'}
                                            </Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                            {/* end update model */}
                            <Button className="bg-red-500 hover:bg-red-600" onClick={() => handleDeleteClick(model)}>
                                Delete
                            </Button>
                        </CardFooter>
                    </Card>
                ))
            ) : (
                <Alert className="my-40 w-lg">
                    <AlertCircleIcon />
                    <AlertTitle>Models not found</AlertTitle>
                    <AlertDescription>add new models, click Add New Model in top right </AlertDescription>
                </Alert>
            )}

            {/* delete model */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild></DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    {modelToDelete && (
                        <>
                            <DialogHeader>
                                {/* Gunakan data dari state 'modelToDelete' */}
                                <DialogTitle>Delete Model {modelToDelete.fruit_type}</DialogTitle>
                                <DialogDescription className="flex">
                                    Are you sure you want to delete this model? This action cannot be undone.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="mt-4">
                                <Button variant="outline" onClick={handleCloseDeleteDialog}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-red-500 hover:bg-red-600"
                                    // Gunakan ID dari state 'modelToDelete'
                                    onClick={(e) => submitDelete(e, modelToDelete.id)}
                                >
                                    {loading ? <LoaderCircleIcon className="h-4 w-4 animate-spin" /> : 'Delete'}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </DialogContent>
            </Dialog>
            {/* end delete product */}
        </div>
    );
}
