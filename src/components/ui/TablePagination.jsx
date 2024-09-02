import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  
  function TablePagination({
    currentPage,
    totalPages,
    handlePageChange,
    maxPageNumbersToShow,
  }) {
    const pageNumbers = [];
    const halfMaxPages = Math.floor(maxPageNumbersToShow / 2);
  
    let startPage = Math.max(1, currentPage - halfMaxPages);
  
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);
  
    // Adjust startPage if endPage is too high
    if (endPage - startPage < maxPageNumbersToShow - 1) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }
  
    // Generate the list of page numbers to display
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <Pagination>
        <PaginationContent className="inline-flex">
          {/* Previous Button */}
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
                <PaginationLink href="#" onClick={() => handlePageChange(1)}>
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
                    ? "bg-[#139FAD] text-white"
                    : "hover:bg-[#139FAD] hover:text-white"
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
  
          {/* Next Button */}
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
    );
  }
  
  export default TablePagination;
  