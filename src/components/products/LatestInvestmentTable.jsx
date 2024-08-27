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

function LatestInvestmentTable({
  title,
  data,
  buttonLabel,
  onButtonClick,
  details,
}) {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 items per page
  const totalPages = Math.ceil(data.length / itemsPerPage); // Calculate total number of pages
  const maxPageNumbersToShow = 3; // Show 3 page numbers at a time

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
    <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
      <div className="flex justify-between my-4">
        <h3 className="text-[#484646] text-[20px] font-bold">{title}</h3>
        {buttonLabel && (
          <CardButton label={buttonLabel} onClick={onButtonClick} />
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Date</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-[#000000] text-left">
                {item.date}
              </TableCell>
              <TableCell className="text-[#000000] text-center">
                {item.category}
              </TableCell>
              <TableCell className="text-[#000000] text-right">
                {item.amount}
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

              {/* Show first page and ellipsis if needed */}
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

              {/* Show dynamic page numbers */}
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

              {/* Show ellipsis and last page if needed */}
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

export default LatestInvestmentTable;
