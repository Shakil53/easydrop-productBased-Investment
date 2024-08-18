import { cn } from '@/lib/utils';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import companyLogo from '../assets/logo/logo.png';
import { MdQuestionMark } from "react-icons/md";
import { HiMenu,HiX  } from 'react-icons/hi'
import { useState } from 'react';
import { IoMdAnalytics } from "react-icons/io";
import { DollarSign } from 'lucide-react';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };



    const navItems = [
        { to: '/productBased-investment/home', icon: FaHome, label: 'Home' },
        { to: '/productBased-investment/analytics', icon: IoMdAnalytics, label: 'Analytics' },
        { to: '/productBased-investment/wallet', icon: DollarSign, label: 'Wallet' },
        
    ];


    

    return (
        <aside className='bg-[#f8fafc] col-span-2 h-full flex flex-col sticky left-0 top-0 overflow-auto p-4 lg:p-5'>
        {/* Hamburger Menu Button for Mobile View */}
        <div className="lg:hidden flex justify-center mb-4">
            <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
                {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
        </div>
        <div className={`flex-1 lg:block ${isOpen ? 'block' : 'hidden'}`}>
            {/* company logo ------------ */}
            <div className='mb-10 hidden md:block'>
                <Link to='/'><img src={companyLogo} alt='company logo'></img></Link>
            </div>
            <nav className="flex flex-col gap-4">
                {navItems.map(({ to, icon: Icon, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => cn("md:p-3 bg-white rounded-sm border shadow-sm font-semibold text-black transition-all flex gap-2", {
                            'bg-[#4338CA] text-white': isActive,
                        })}
                    >
                        <div className='mx-auto md:mx-0 md:truncate md:flex gap-2'>
                            <Icon className="shrink-0 size-6" />
                            <span className="truncate hidden md:block">{label}</span>
                        </div>
                    </NavLink>
                ))}
            </nav>
        </div>
        {/* Footer section-------------- */}
        <div className="hidden md:block bg-[#EBEEFF] max-w-lg p-4 shadow-md rounded-lg mt-12 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4338CA] rounded-full">
                <span className="text-3xl text-white"><MdQuestionMark /></span>
            </div>
            <h1 className="text-xs font-bold mb-2 mt-2 text-center">Need Help with Easydrop</h1>
            <div className='flex justify-center'>
                <button className='rounded-sm bg-[#4338CA] text-white p-2 text-xs font-semibold'><Link to='/'>Go to Help Center</Link></button>
            </div>
        </div>
    </aside>
    
    );
};

export default Sidebar;