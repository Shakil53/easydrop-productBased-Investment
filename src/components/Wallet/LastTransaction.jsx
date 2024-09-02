import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function LastTransaction() {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">17/07/2024</TableCell>
            <TableCell>Bank</TableCell>
            <TableCell className="text-[#00E676]">Cash in</TableCell>
            <TableCell className="text-center">14,600</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">17/07/2024</TableCell>
            <TableCell>BKash</TableCell>
            <TableCell className="text-[#D61D1D]">Cash out</TableCell>
            <TableCell className="text-center">20,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">17/07/2024</TableCell>
            <TableCell>Nagad</TableCell>
            <TableCell className="text-[#00E676]">Cash in</TableCell>
            <TableCell className="text-center">40,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default LastTransaction;
