import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TableModel() {
    return (
        <div className="">
            <Table className="">
                <TableHeader className="bg-muted">
                    <TableRow>
                        <TableHead>Model Name</TableHead>
                        <TableHead>Fruit Type</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Model X</TableCell>
                        <TableCell>Citrus</TableCell>
                        <TableCell>
                            <div className="gap-2">
                                <Button className="mr-2 bg-blue-500 text-white hover:bg-blue-600">Edit</Button>
                                <Button variant="destructive">Delete</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Model Y</TableCell>
                        <TableCell>Berries</TableCell>
                        <TableCell>
                            <Button className="mr-2 bg-blue-500 text-white hover:bg-blue-600">Edit</Button>
                            <Button variant="destructive">Delete</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}
