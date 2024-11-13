import './Header.css';

import { useNavigate } from "react-router-dom";

function Header({ currentSession, logout }) {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center w-full'>
            <div className='flex justify-center items-center w-full'>
                <div className='flex justify-between items-center w-4/5 sm:w-2/3 h-14 lg:h-18 py-10'>
                    <img src='/Primary Logo on Light BG.svg' className='w-[10%] hover:cursor-pointer hidden lg:flex' onClick={() => navigate("/")}/>
                    <img src='/symbolic mark.svg' className='w-1/6 md:w-[10%] hover:cursor-pointer lg:hidden' onClick={() => navigate("/")}/>
                    <div className='flex'>
                        <p className='text-md font-medium hover:cursor-pointer mr-10' onClick={() => navigate("/documentation")}>Documentation</p>
                        <p className='text-md font-medium hover:cursor-pointer' onClick={() => navigate("/")}>Release Notes</p>
                        {currentSession && <p className='text-md font-medium ml-10 hover:cursor-pointer' onClick={() => navigate("/update")}>Upload</p>}
                    </div>
                    {
                        currentSession ?
                        <p className='w-[10%] text-right text-md font-medium hover:cursor-pointer' onClick={logout}>Log Out</p> :
                        <p className='md:w-[10%] text-right text-md font-medium hover:cursor-pointer hidden md:flex' onClick={() => navigate("/authentication")}>Log In</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;