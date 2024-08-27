import { tableDataInvestedProducts } from "@/api/investedProducts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const InvestedProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 15;
    const totalPages = Math.ceil(tableDataInvestedProducts.length / rowsPerPage);

    // Get current page data
    const currentData = tableDataInvestedProducts.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Handle page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    // Generate page numbers
    const pageNumbers = () => {
        const range = 3;
        let start = Math.max(currentPage - range, 1);
        let end = Math.min(currentPage + range, totalPages);

        if (end - start < 2 * range) {
            start = Math.max(end - 2 * range, 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };
    return (
        <>
        {/* Header Section */}
        <div className="flex items-center gap-2 justify-end p-4 lg:p-5">
            <div className="flex items-center gap-28 md:gap-5 sm:flex-row-reverse">
                <div className="flex gap-3">
                    <div className="flex sm:flex-row-reverse gap-3 items-center">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-xl">Shakil</p>
                            <p className="text-[#8F8F8F] font-semibold">User Id: TODO</p>
                        </div>
                    </div>
                </div>
                <div>
                    <IoNotifications />
                </div>
            </div>

            <div className="hidden sm:block">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger><IoIosArrowDown /></MenubarTrigger>
                        <MenubarContent className="mt-5">
                            <MenubarItem>Settings <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Logout</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex justify-between">
            <h1 className="font-bold sm:font-semibold text-md sm:text-3xl">Invested Product</h1>
            <div className="flex gap-2 items-center">
                <Select>
                    <SelectTrigger className="w-[90px] sm:w-[150px]">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Years</SelectLabel>
                            {[2024, 2023, 2022, 2021, 2020].map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[90px] sm:w-[150px]">
                        <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Months</SelectLabel>
                            <SelectItem value="jan-apr">Jan - April</SelectItem>
                            <SelectItem value="may-aug">May - Aug</SelectItem>
                            <SelectItem value="sep-dec">Sep - Dec</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>

        {/* Table Section */}
        <div className="p-3 grid sm:grid-cols-10">
            <div className="sm:col-span-10 col-span-1 w-full min-h-[100px] rounded-lg border p-4 shadow-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px] text-md sm:text-lg">Sl No</TableHead>
                            <TableHead className="text-md sm:text-lg">Name</TableHead>
                            <TableHead className="text-md sm:text-lg text-center">Quantity Sole</TableHead>
                            <TableHead className="text-md sm:text-lg text-center">Current Stock</TableHead>
                            
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentData.map((data, index) => (
                            <TableRow key={data.invoice}>
                                <TableCell>{(currentPage - 1) * rowsPerPage + index + 1}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell className='text-center'>{data.Quantity_Sold}</TableCell>
                                <TableCell className='text-center'>{data.Current_Stock}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination Section */}
                <div className="flex justify-end items-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <div className="flex">
                        {pageNumbers().map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`px-3 py-1 mx-1 rounded ${
                                    currentPage === pageNumber
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};

export default InvestedProduct;