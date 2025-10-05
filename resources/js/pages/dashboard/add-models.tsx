import { Button } from '@/components/ui/button';
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
import { SharedData } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { LoaderCircle, Search } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

interface AddModelsProps {
    initialModels: ModelSearch[];
    onSearch: (searchTerm: string) => void;
}

interface AddModelForm {
    fruitType: string;
    modelName: string;
    model: File | null;

    [key: string]: string | File | null;
}
interface ModelSearch {
    fruit_type: string | null;
    model_name: string;
}

export default function AddModels({ onSearch }: AddModelsProps) {
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm<AddModelForm>({
        fruitType: '',
        modelName: '',
        model: null,
    });
    const { auth } = usePage<SharedData>().props;
    const idUser = auth.user.id;

    const submit: FormEventHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        const formData = new FormData();
        formData.append('fruitType', data.fruitType);
        formData.append('modelName', data.modelName);
        if (data.model) {
            formData.append('model', data.model);
        }
        formData.append('user_id', idUser.toString());

        try {
            const res = await fetch('/api/models/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            if (res.ok) {
                const result = await res.json();
                console.log('Success:', result);

                reset();
                setOpenDialog(false);
                window.location.reload();
                toast.success('Model Uploaded Successfully');
            } else {
                const errorText = await res.text();
                console.error('Server Error Response:', errorText);
                toast.error('Failed to upload model. See console for details.');
            }
        } catch (err) {
            // This will catch network errors or other unexpected issues
            console.error('Fetch Error:', err);
            toast.error('An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);

        // Panggil fungsi dari Dashboard untuk melakukan filter dan update state global
        onSearch(searchTerm);
    };
    return (
        <div className="flex gap-4">
            <div className="relative flex items-stretch">
                <Search className="absolute top-2 ml-2 h-5 w-5 transform text-gray-400" />
                <Input className="pl-10" placeholder="Search Models" value={searchItem} onChange={handleInputChange} />
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                    <Button className="">Add New Model</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={submit} encType="multipart/form-data">
                        <DialogHeader>
                            <DialogTitle>Add New Model</DialogTitle>
                            <DialogDescription className="flex">
                                Upload model with just extensions <p className="ml-1 text-primary">.tflite</p>
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="fruit-type">Fruit Type</Label>
                                <Input
                                    id="fruit-type"
                                    name="fruitType"
                                    required
                                    autoFocus
                                    value={data.fruitType}
                                    onChange={(e) =>
                                        setData((prevData) => ({
                                            ...prevData,
                                            fruitType: e.target.value,
                                        }))
                                    }
                                    placeholder="Input Fruit Type"
                                />
                                {/* <InputError message={errors.fruitType as (string | undefined)} className="mt-2" /> */}
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="model-name">Model Name</Label>
                                <Input
                                    id="model-name"
                                    name="modelName"
                                    required
                                    autoFocus
                                    value={data.modelName}
                                    onChange={(e) =>
                                        setData((prevData) => ({
                                            ...prevData,
                                            modelName: e.target.value,
                                        }))
                                    }
                                    placeholder="Input Model Name"
                                />
                                {/* <InputError message={errors.fruitType} className="mt-2" /> */}
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="model">Upload Model</Label>
                                <Input
                                    id="model"
                                    required
                                    autoFocus
                                    name="model"
                                    type="file"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        setData((prevData) => ({
                                            ...prevData,
                                            model: e.target.files ? e.target.files[0] : null,
                                        }))
                                    }
                                />
                                <DialogDescription className="flex">Upload file name "FruitName_ModelName"</DialogDescription>
                                {/* <InputError message={errors.model} className="mt-2" /> */}
                            </div>
                        </div>
                        <DialogFooter className="mt-4">
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit" disabled={loading}>
                                {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : 'Save'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
