// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import CardButton from "../CardButton";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "../ui/pagination";

// function LatestOrderTable({
//   title,
//   data,
//   buttonLabel,
//   onButtonClick,
//   details,
// }) {
//   return (
//     <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
//       <div className="flex justify-between my-4">
//         <h3 className="text-[#484646] text-[20px] font-bold">{title}</h3>
//         {buttonLabel && (
//           <CardButton label={buttonLabel} onClick={onButtonClick} />
//         )}
//       </div>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="text-left">Serial</TableHead>
//             <TableHead className="text-center">Order ID</TableHead>
//             <TableHead className="text-center">Date</TableHead>
//             <TableHead className="text-center">COD</TableHead>
//             <TableHead className="text-right">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {data.map((data) => (
//             <TableRow key={data.id}>
//               <TableCell className="font-medium text-[#000000] text-left">
//                 {data.serial}
//               </TableCell>
//               <TableCell className=" text-[#000000] text-center">
//                 {data.orderId}
//               </TableCell>
//               <TableCell className="text-[#000000] text-center">
//                 {data.date}
//               </TableCell>
//               <TableCell className="text-[#000000] text-center">
//                 {data.cod}
//               </TableCell>
//               <TableCell
//                 className={`text-[#000000] text-right ${
//                   data.status == "Delivered" && "text-[#33CF3A]"
//                 } ${data.status == "Pending" && "text-[#FAAD13]"} ${
//                   data.status == "Canceled" && "text-[#CF3333]"
//                 } `}
//               >
//                 {data.status}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {details && (
//         <div className="text-right py-4">
//           <Pagination>
//             <PaginationContent className="inline-flex">
//               <PaginationItem className="border-2 rounded-md">
//                 <PaginationPrevious href="#" />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink
//                   href="#"
//                   className="bg-[#64449B] rounded-md text-white hover:bg-[#64449B] hover:text-white"
//                 >
//                   1
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">2</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">3</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationEllipsis />
//               </PaginationItem>
//               <PaginationItem className="border-2 rounded-md">
//                 <PaginationNext href="#" />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LatestOrderTable;

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CardButton from "../CardButton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

function LatestOrderTable({
  title,
  data,
  buttonLabel,
  onButtonClick,
  details,
}) {
  // State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Define how many items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const maxPageNumbersToShow = 3; // Number of pages to show at a time

  // Get data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate page numbers to display
  const pageNumbers = [];
  const halfMaxPages = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(1, currentPage - halfMaxPages);
  let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (endPage - startPage < maxPageNumbersToShow - 1) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`${!details && "border-2"} border-[#D9D9D9] rounded-lg p-6`}
    >
      <div className="flex justify-between my-4">
        <h3 className="text-[#484646] text-[20px] font-bold">{title}</h3>
        {buttonLabel && (
          <CardButton label={buttonLabel} onClick={onButtonClick} />
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Serial</TableHead>
            <TableHead className="text-center">Order ID</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">COD</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-[#000000] text-left">
                {item.serial}
              </TableCell>
              <TableCell className=" text-[#000000] text-center">
                {item.orderId}
              </TableCell>
              <TableCell className="text-[#000000] text-center">
                {item.date}
              </TableCell>
              <TableCell className="text-[#000000] text-center">
                {item.cod}
              </TableCell>
              <TableCell
                className={`text-[#000000] text-right ${
                  item.status === "Delivered" && "text-[#33CF3A]"
                } ${item.status === "Pending" && "text-[#FAAD13]"} ${
                  item.status === "Canceled" && "text-[#CF3333]"
                }`}
              >
                {item.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {details && (
        <div className="text-right py-4">
          <Pagination>
            <PaginationContent className="inline-flex">
              <PaginationItem className="border-2 rounded-md">
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
              </PaginationItem>

              {/* Display first page and ellipsis */}
              {startPage > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(1)}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  {startPage > 2 && <PaginationEllipsis />}
                </>
              )}

              {/* Display page numbers */}
              {pageNumbers.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(page)}
                    className={`${
                      currentPage === page
                        ? "bg-[#64449B] text-white"
                        : "hover:bg-[#64449B] hover:text-white"
                    }`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Display ellipsis and last page */}
              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && <PaginationEllipsis />}
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem className="border-2 rounded-md">
                <PaginationNext
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default LatestOrderTable;
