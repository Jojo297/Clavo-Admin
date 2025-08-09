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
                        <Button className="bg-blue-500 hover:bg-blue-600">Edit</Button>

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
