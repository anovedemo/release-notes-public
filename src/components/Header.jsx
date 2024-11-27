import { useState } from 'react';
import './Header.css';

import { useNavigate } from "react-router-dom";

function Header({ currentSession, logout }) {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className='flex justify-center w-full flex-col md:flex-row'>
            <div className='flex justify-center items-center w-full'>
                <div className='flex justify-between items-center w-4/5 sm:w-2/3 h-14 lg:h-18 py-10'>
                    <img src='/Primary Logo on Light BG.svg' className='w-[10%] hover:cursor-pointer hidden lg:flex' onClick={() => navigate("/")}/>
                    <img src='/symbolic mark.svg' className='w-1/6 md:w-[10%] hover:cursor-pointer lg:hidden mr-6' onClick={() => navigate("/")}/>
                    <div className='hidden md:flex items-center'>
                        <p className='text-md font-medium hover:cursor-pointer mr-10 transition-all duration-300 ease-in-out hover:text-midblue' onClick={() => navigate("/documentation")}>Documentation</p>
                        <p className='text-md font-medium hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-midblue' onClick={() => navigate("/release_notes")}>Release Notes</p>
                        {currentSession && <p className='text-md font-medium ml-10 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-midblue' onClick={() => navigate("/update")}>Upload</p>}
                    </div>
                    <img src="/list.svg" className="md:hidden" onClick={() => setIsDropdownOpen((prevState) => !prevState)} />
                    {
                        currentSession ?
                        <p className='w-[10%] text-right text-md font-medium hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-midblue' onClick={logout}>Log Out</p> :
                        <p className='md:w-[10%] text-right text-md font-medium hover:cursor-pointer hidden md:flex transition-all duration-300 ease-in-out hover:text-midblue' onClick={() => navigate("/authentication")}>Log In</p>
                    }
                </div>
            </div>
            {
                isDropdownOpen &&
                <div className='flex flex-col items-center bg-white pb-6 pt-2 gap-4 fade-in shadow-lg rounded-b-xl'>
                    <p className='text-lg font-medium hover:cursor-pointer transition-all duration-300 ease-in-out' onClick={() => navigate("/documentation")}>Documentation</p>
                    <p className='text-lg font-medium hover:cursor-pointer transition-all duration-300 ease-in-out' onClick={() => navigate("/release_notes")}>Release Notes</p>
                </div>
            }
        </div>
    )
}

export default Header;