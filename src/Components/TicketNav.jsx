import React from 'react';
import arrowNavIcon from "../assets/arrowNavIcon.svg"
import LogoFrame from "../assets/LogoFrame.svg"
export const TicketNav = () => {
    return (
        <>
            <div className='border border-[#197686] py-3 px-1 lg:px-6 rounded-2xl my-3 bg-[#08252B]'>
              <nav className='flex space-x-48 lg:space-x-44 md:space-x-52'>
                  <div className='flex'>
                      <img src={LogoFrame} alt="arrow" className=' px-1 ml-2'/>
                  </div>
                  <ul className='hidden md:flex space-x-4 mt-3 '>
                      <li><a href="#" className='hover:text-[#197686]'>Events</a></li>
                      <li><a href="#" className='hover:text-[#197686]'>My Tickets</a></li>
                      <li><a href="#" className='hover:text-[#197686]'>About Project</a></li>
                  </ul>
                  <button className="px-6 lg:px-4  h-10 text-gray-800 bg-white rounded-md flex items-center justify-center sm:space-x-2 space-x-1">
                    <div className="mt-1 whitespace-nowrap">My Ticket</div>
                        <img src={arrowNavIcon} alt="arrow" className="mt-1 ml-2 sm:ml-1 w-4 h-4 sm:w-5 sm:h-5"/>
                    </button>
              </nav>
            </div>
        </>
      )
}









