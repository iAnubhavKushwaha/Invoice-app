import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InvoiceActions } from "./InvoiceActions";

export function InvoiceList(){
    return (
      <Table>
        <TableHeader>
          <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
          <TableCell>#001</TableCell>
          <TableCell>Yash Elimination</TableCell>
          <TableCell>$99.97</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>08/01/2025</TableCell>
          <TableCell className="text-right">
            <InvoiceActions/>
          </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    )

}