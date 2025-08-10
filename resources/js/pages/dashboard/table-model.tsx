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
import { useForm } from '@inertiajs/react';
import { LoaderCircleIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

type Model = {
    id: number;
    fruit_type: string;
    model_name: string;
    path: string;
};

export default function TableModel() {
    const [loading, setLoading] = useState(false);
    const [models, setModels] = useState<Model[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm<Model>({
        id: 0,
        fruit_type: '',
        model_name: '',
        path: '',
    });

    // Buka dialog edit
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
    const submitUpdate = async (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('fruitType', data.fruit_type);
        formData.append('modelName', data.model_name);

        try {
            const response = await fetch(`http://localhost:8000/api/models-update/${id}`, {
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
            const response = await fetch(`http://localhost:8000/api/models/${id}`, {
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

    // fetch models
    useMemo(() => {
        // Fetch models from API
        try {
            setLoading(true);
            fetch('http://localhost:8000/api/models')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setModels(data);
                });
        } catch (error) {
            console.log(error);
            toast.error('Failed to fetch models');
        } finally {
            setLoading(false);
        }
    }, []);
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-4">
            {models.map((model) => (
                <Card key={model.id} className="max-w-sm">
                    <CardHeader>
                        <CardTitle>{model.fruit_type}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{model.model_name}</CardDescription>
                    </CardContent>
                    <CardFooter className="gap-2">
                        <Button className="bg-green-500 hover:bg-green-600" onClick={() => window.open(`/storage/${model.path}`)}>
                            Download
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

                        {/* delete model */}
                        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                            <DialogTrigger asChild>
                                <Button className="bg-red-500 hover:bg-red-600">Delete</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Delete Model</DialogTitle>
                                    <DialogDescription className="flex">
                                        Are you sure you want to delete this model? This action cannot be undone.
                                    </DialogDescription>
                                </DialogHeader>

                                <DialogFooter className="mt-4">
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-red-500 hover:bg-red-600"
                                        onClick={(e) => submitDelete(e, model.id)}
                                    >
                                        {loading ? <LoaderCircleIcon className="h-4 w-4 animate-spin" /> : 'Delete'}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        {/* end delete product */}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
