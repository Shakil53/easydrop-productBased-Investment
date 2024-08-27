import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function InvestmentList({ data, details }) {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Ownership</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.date}</TableCell>
              <TableCell>{data.amount} Tk</TableCell>
              <TableCell
                className={
                  data.status === "Pending"
                    ? "text-[#D61D1D]"
                    : "text-[#00E676]"
                }
              >
                {data.status}
              </TableCell>
              <TableCell className="text-center">{data.ownership}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* InvestMent List Pagination */}
        {/* <div className="text-right py-8"> */}

        {/* </div> */}
      </Table>
      {details && (
        <div className="text-right py-8">
          <Pagination>
            <PaginationContent className="inline-flex">
              <PaginationItem className="border-2 rounded-md">
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="bg-[#64449B] rounded-md text-white hover:bg-[#64449B] hover:text-white"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className="border-2 rounded-md">
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}

export default InvestmentList;
