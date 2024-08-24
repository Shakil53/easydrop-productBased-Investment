import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { ArrowRight } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";
import { CircleArrowUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Cell, Pie, PieChart, } from "recharts";
import { COLORS, dataExpenseBudgetGraphData, renderCustomizedLabel, style } from "@/api/ExpenseBudgetGraphData";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import topGainProductImg from '../../assets/images/img.png'
import { Download } from 'lucide-react';
import { convertToCSV, downloadCSV } from "@/utils/income-statement-csv-download";
import { dataSalesGrowth } from "@/api/salesGrowth";





const Analytics = () => {
    const navigate = useNavigate();

    const goToSuggesstedProductPage = () => {
        navigate('/productBased-investment/analytics/suggested-product');
    };
    const data = [
        { label: 'Total Income', value: 'TODO' },
        { label: 'Cost of Goods', value: 'TODO' },
        { label: 'Profit', value: 'TODO' },
        { label: 'Tax', value: 'TODO' },
        { label: 'Gross Profit', value: 'TODO' },
        { label: 'Net Profit', value: '5,000' },
    ];
    
    const handleDownload = () => {
        const csvString = convertToCSV(data);
        downloadCSV(csvString, 'EasyDrop-Income Statement.csv');
    };
    
    const investmentDetails = [
        { id: 'invested-products', title: 'Invested Products', status: '3' },
        { id: 'total-products', title: 'Total Products', status: '200' },
        { id: 'total-expenses', title: 'Total Expenses', status: ' 2000' },
        { id: 'total-revenue', title: 'Total Revenue', status: ' 5000' },
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
            <div className="p-3 grid sm:grid-cols-12 grid-cols-2 gap-4">
                {investmentDetails.map((singleCard) => (
                    <div key={singleCard.id} className="p-4 sm:col-span-3 min-h-[150px] border shadow-lg rounded relative">
                        <p className="sm:text-lg text-md font-semibold">{singleCard.title}</p>
                        <p className="sm:text-2xl font-bold text-lg">
                            {(singleCard.id === 'total-expenses' || singleCard.id === 'total-revenue' ? "TK " : "") + singleCard.status}
                            {(singleCard.id === 'total-expenses' || singleCard.id === 'total-revenue' ? 
                                
                                    <div className="flex items-center gap-1 sm:mt-1">
                                        <CircleArrowUp className=" text-[#00E676] size-5 sm:mt-1"></CircleArrowUp> 
                                 
                                        <div className="flex items-center gap-1">
                                            <p className="text-[#00E676] sm:text-sm text-[8px]">+50%</p>
                                            <p className="text-[#949494] sm:text-xs text-[8px]">From last week</p>
                                        </div>
                                    
                                    </div>
                                    
                               : ''
                            )}
                        </p>
                        <NavLink to={`/productBased-investment/analytics/${singleCard.id}`}>
                            <ArrowRight className="absolute bottom-4 right-4" />
                        </NavLink>
                    </div>
                ))}
            </div>
            {/* Content here-------------- */}
            <div className="p-3 grid sm:grid-cols-12 gap-4">
                {/* Sales Growth content here---- */}
                <div className="sm:col-span-8 rounded-lg border p-4 shadow-md">
                    {/* heading--- */}
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl">Sales Growth</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
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

                    </div>
                        {/* Graph chart ---------------------- */}
                     <ResponsiveContainer width="100%" height="85%">
                            <AreaChart width={730} height={250} data={dataSalesGrowth}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#522F8F" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#522F8F" stopOpacity={0}/>
                                    </linearGradient>
                                    
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#FF0080" fillOpacity={1} fill="url(#colorUv1)" />
                            
                                </AreaChart>
                                        {/* <Area type="monotone" dataKey="uv" stroke="#FF0080" fill="#522F8F"/> */}
                        </ResponsiveContainer>
                        
                    
                </div>
                {/* Revenue Content------------2 */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                     {/* heading--- */}
                     <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl">Revenue</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
                                <SelectValue placeholder="This month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Months</SelectLabel>
                                <SelectItem value="apple">Jan - April</SelectItem>
                                <SelectItem value="pineapple">May- Aug</SelectItem>
                                <SelectItem value="mango">Sep - Dec</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                     </div>

                     <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={dataExpenseBudgetGraphData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend iconSize={10} layout="horizontal" horizOriginX="bottom" wrapperStyle={style} />
                            </PieChart>
                        </ResponsiveContainer>
                        
                    </div>

                    
                </div>
                {/* Income Statement Content------------2 */}
                <div className="sm:col-span-8 rounded-lg border p-4 shadow-md">
                    <div>
                        {/* heading--- */}
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold text-xl">Income Statement</h1>
                            <div className="flex gap-2">
                                    {/* <button className="text-[#000000] border-[1px] border-[#676767] border-opacity-50 bg-transparent text-[10px] md:text-[14px] hover:bg-transparent">{RiDownload2Fill} CVS </button> */}
                                    <button onClick={handleDownload} className="border rounded w-20 flex items-center justify-around"><Download className="size-4"></Download><span className="text-md">CSV</span></button>    
                                    <Select>
                                    <SelectTrigger className="w-[100px] sm:w-[150px]">
                                        <SelectValue placeholder="This month" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>Months</SelectLabel>
                                        <SelectItem value="apple">Jan - April</SelectItem>
                                        <SelectItem value="pineapple">May- Aug</SelectItem>
                                        <SelectItem value="mango">Sep - Dec</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                    
                                </div>
                        </div>
                        {/* data here */}
                        <div className="p-4 items-center py-20">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                <p>Total Income</p>
                                <p>Cost of Goods</p>
                                <p>Profit</p>
                                <p>Tax</p>
                                <p>Gross Profit</p>
                                </div>

                                <div className="flex flex-col text-right">
                                <p>TODO</p>
                                <p>TODO</p>
                                <p>TODO</p>
                                <p>TODO</p>
                                <p>TODO</p>
                                </div>
                            </div>
                                <div className="w-full h-px bg-gray-300 my-2"></div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col text-right w-full">
                                    <p className="flex justify-between">
                                        <span>Net Profit</span>
                                        <span>5,000</span>
                                    </p>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
                {/* Suggested product for productbased Content------------2 */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                    {/* heading--- */}
                    <div className="flex justify-between items-center mb-1">
                        <h1 className="font-semibold text-xl">Top Gainer Product</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
                                <SelectValue placeholder="month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Months</SelectLabel>
                                <SelectItem value="apple">Jan - April</SelectItem>
                                <SelectItem value="pineapple">May- Aug</SelectItem>
                                <SelectItem value="mango">Sep - Dec</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* product here----------------- */}
                    <div>
                        <Table>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="text-md">Image</TableHead>
                                    <TableHead className="text-md">Category</TableHead>
                                <TableHead className="text-md">Selling amount</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell><img src={topGainProductImg}></img></TableCell>
                                    <TableCell>Bag TODO</TableCell>
                                    <TableCell>10,0 TODO</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={topGainProductImg}></img></TableCell>
                                    <TableCell>Bag TODO</TableCell>
                                    <TableCell>10,0 TODO</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={topGainProductImg}></img></TableCell>
                                    <TableCell>Bag TODO</TableCell>
                                    <TableCell>10,0 TODO</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div>

                        </div>
                    </div>
                    <div className="flex justify-end">
                            <button onClick={goToSuggesstedProductPage} className="text-xs px-2.5 py-1 shadow-2xl text-white rounded-xl bg-[#522F8F]">View more</button>
                        </div>
                </div>
            </div>

      </>
    );
};

export default Analytics;