import React from 'react';
import { useState } from 'react';
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { BiSolidCube, BiSolidDashboard } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillSchedule, AiOutlineSchedule } from "react-icons/ai";
import { LiaRouteSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { MdRecycling, MdOutlineManageSearch } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";

const SideBar  = () => {
  const [open, setOpen] = useState(true);

  //Sidebar Items
  const Menus = [
    { title: "Dashboard" },
    { title: "Collection Schedule", icon: <AiOutlineSchedule /> },
    { title: "Request Schedule", icon: <AiFillSchedule/> },
    { title: "Collection Routes", icon: <LiaRouteSolid /> },
    { title: "Reports & Analytics", icon: <TbReportSearch />},
    { title: "Recycling Guide", icon: <MdRecycling /> },
    { 
      title: "Disposal Locations", icon: <FaMapLocationDot />,
      submenu: true,
      submenuItems: [
        { title: "Location 1" },
        { title: "Location 2" },
        { title: "Location 3" },
      ],
    },
    { 
      title: "User Profile", icon: <LuUserSquare2 />,
      submenu: true,
      submenuItems: [
        { title: "Addresses" },
        { title: "Billing" },
      ],
    },
    { title: "Regulations", icon: <MdOutlineManageSearch /> },
    { title: "Feedback", icon: <VscFeedback /> },
    { title: "Logout", spacing: true, icon: <FiLogOut /> },
  ];

  const [submenuOpen, setSubmenuOpen] = useState(Array(Menus.length).fill(false));

  return (
    <div className='flex'>
      <div className={`bg-darkGreen h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-darkGreen text-3xl 
          rounded-full absolute -right-3 top-9 
          border border-darkGreen cursor-pointer ${!open && "rotate-180"} duration-400`} 
          onClick={() => setOpen(!open)}/>

      <div className='inline-flex'>
        <BiSolidCube className={`text-paleGreen text-4xl cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>EcoTrack</h1>
      </div>

      <ul className={`pt-2 ${open ? "duration-400 overflow-hidden" : ""}`}>
        {Menus.map((menu, index) => (
          <>
            <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md ${ menu.spacing ? "mt-9" : "mt-2" }`} style={{ whiteSpace: "nowrap" }}>
              <span className='text-2xl block float-left text-paleGreen'>
                {menu.icon ? menu.icon : <BiSolidDashboard />}
              </span>
              <span className={`text-white text-sm origin-left font-thin flex flex-1 duration-300 ${!open ? "hidden" : ""}`}>{menu.title}</span>
              {menu.submenu && open && (
                <BsChevronDown className={`${submenuOpen[index] && "rotate-180"} duration-300`} onClick={() => {
                  const updatedSubmenuOpen = [...submenuOpen];
                  updatedSubmenuOpen[index] = !updatedSubmenuOpen[index];
                  setSubmenuOpen(updatedSubmenuOpen);
                }}/>
              )}
            </li>
            
            {menu.submenu && submenuOpen[index] &&(
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index} className='text-white text-sm font-thin flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-black rounded-md'>
                    {submenuItem.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>

      </div>
    </div>
  )
};

export default SideBar;