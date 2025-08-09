import InputError from '@/components/input-error';
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
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

type AddModelForm = {
    fruitType: string;
    modelName: string;
    model: File | null;
};

export default function AddModels() {
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm<AddModelForm>({
        fruitType: '',
        modelName: '',
        model: null,
    });
    const { auth } = usePage<SharedData>().props;
    const idUser = auth.user.id;
    // console.log(auth.user.id);
    const submit: FormEventHandler = async (e) => {
        setLoading(true);

        e.preventDefault();
        const formData = new FormData();
        formData.append('fruitType', data.fruitType);
        formData.append('modelName', data.modelName);
        if (data.model) {
            formData.append('model', data.model);
        }
        formData.append('id_user', idUser.toString());

        try {
            const res = await fetch('http://localhost:8000/api/models/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();
            console.log(result);

            if (res.ok) {
                reset('fruitType', 'model');
                setOpenDialog(false);
                window.location.reload();
                toast.success('Model Uploaded Successfully');
            } else {
                toast.error('Error: ' + result.message);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
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
                                    onChange={(e) => setData('fruitType', e.target.value)}
                                    placeholder="Input Fruit Type"
                                />
                                <InputError message={errors.fruitType} className="mt-2" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="model-name">Model Name</Label>
                                <Input
                                    id="model-name"
                                    name="modelName"
                                    required
                                    autoFocus
                                    value={data.modelName}
                                    onChange={(e) => setData('modelName', e.target.value)}
                                    placeholder="Input Model Name"
                                />
                                <InputError message={errors.fruitType} className="mt-2" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="model">Upload Model</Label>
                                <Input
                                    id="model"
                                    required
                                    autoFocus
                                    name="model"
                                    type="file"
                                    onChange={(e) => setData('model', e.target.files ? e.target.files[0] : null)}
                                />
                                <InputError message={errors.model} className="mt-2" />
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
