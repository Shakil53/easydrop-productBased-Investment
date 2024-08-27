import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import productImage from "@/assets/images/product.png";

import { GoArrowUpRight } from "react-icons/go";
import { FiArrowDownRight } from "react-icons/fi";
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

const ITEMS_PER_PAGE = 9;

function PopularAssetsTable({
  title,
  data,
  buttonLabel,
  onButtonClick,
  details,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Slice the data for the current page
  const currentData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Pagination logic
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 2);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

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
            <TableHead className="text-left">Image</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Growth</TableHead>
            <TableHead className="text-right">Selling Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>
                <img src={productImage} className="h-[35px]" alt="" />
              </TableCell>
              <TableCell className="text-center">{data.category}</TableCell>
              <TableCell
                className={`
                  ${
                    data.status === "down" ? "text-[#D61D1D]" : "text-[#00E676]"
                  } 
                `}
              >
                <span className="flex justify-center text-center">
                  {data.growth}
                  {data.status === "down" ? (
                    <FiArrowDownRight className="ml-1" />
                  ) : (
                    <GoArrowUpRight className="ml-1" />
                  )}
                </span>
              </TableCell>
              <TableCell className="text-right">
                {data.selling_amount}
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
                <PaginationPrevious href="#" onClick={handlePrevious} />
              </PaginationItem>
              {/* Show first page */}
              {startPage > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink href="#" onClick={() => handlePageClick(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  {startPage > 2 && <PaginationEllipsis />}
                </>
              )}
              {/* Display pages */}
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                <PaginationItem key={startPage + i}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageClick(startPage + i)}
                    className={`${
                      currentPage === startPage + i
                        ? "bg-[#64449B] rounded-md text-white"
                        : ""
                    }`}
                  >
                    {startPage + i}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {/* Show last page */}
              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && <PaginationEllipsis />}
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageClick(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
              <PaginationItem className="border-2 rounded-md">
                <PaginationNext href="#" onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default PopularAssetsTable;
