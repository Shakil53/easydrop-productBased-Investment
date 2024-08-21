import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { ArrowRight } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { CircleArrowUp } from 'lucide-react';


const Analytics = () => {
    const investmentDetails = [
        { id: 1, title: 'Invested Products', status: '3' },
        { id: 2, title: 'Total Products', status: '200' },
        { id: 3, title: 'Total Expenses', status: ' 2000' },
        { id: 4, title: 'Total Revenue', status: ' 5000' },
        // Add more objects as needed
    ];
    
    return (
        <>
       {/* Header Section------------- */}
            {/* --------Header Avater */}
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
                            <div className="">
                                <IoNotifications></IoNotifications>
                            </div>
                    </div>
                    
                    <div className="hidden sm:block">
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger><IoIosArrowDown></IoIosArrowDown></MenubarTrigger>
                                    <MenubarContent className='mt-5'>
                                    <MenubarItem>
                                        Settings <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator/>
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
            {/* Investment card details-------- */}
            <div className="p-3 grid sm:grid-cols-12 gap-4">
                {investmentDetails.map((singleCard) => (
                    <div key={singleCard.id} className="p-4 sm:col-span-3 min-h-[150px] border shadow-lg rounded relative">
                        <p className="text-lg font-semibold">{singleCard.title}</p>
                        <p className="text-2xl font-bold">
                            {(singleCard.id === 3 || singleCard.id === 4 ? "TK " : "") + singleCard.status}
                            {(singleCard.id === 3 || singleCard.id === 4 ? 
                                
                                    <div className="flex items-center gap-1 mt-1">
                                        <CircleArrowUp className=" text-[#00E676] size-5 mt-1"></CircleArrowUp> 
                                 
                                        <div className="flex items-center gap-1">
                                            <p className="text-[#00E676] text-sm">+50%</p>
                                            <p className="text-[#949494] text-xs">From last week</p>
                                        </div>
                                    
                                    </div>
                                    
                               : ''
                            )}
                        </p>
                        <NavLink to={`/details/${singleCard.id}`}>
                            <ArrowRight className="absolute bottom-4 right-4" />
                        </NavLink>
                    </div>
                ))}
                </div>
           

      </>
    );
};

export default Analytics;