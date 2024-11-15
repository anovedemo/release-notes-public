import Footer from "../components/Footer";
import Header from "../components/Header";
import './Documentation.css'
import { useNavigate } from "react-router-dom";

function Documentation( { currentSession, logout } ) {
    const navigate = useNavigate();

    return (
        <>
            <Header currentSession={currentSession} logout={logout}/>
            <div className="fade-in">
                <div class="bg-white py-10 mb-8 sm:py-10 lg:px-6">
                    <div class="mx-auto max-w-2xl text-center w-[90%] lg:w-2/3">
                        <h1 class="lg:mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl bg-gradient-to-r from-cornell to-midblue inline-block text-transparent bg-clip-text animate__animated animate__fadeInDown">Documentation</h1>
                        <p class="mt-6 text-md md:text-lg leading-8 text-gray-600 animate__animated animate__fadeInUp">Explore our documentation with step-by-step tutorials, videos, and guides to get the most out of the Anove app!</p>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                    <div className="flex flex-col items-center lg:flex lg:flex-row">
                        <a href="https://www.youtube.com/@AnoveInternational/videos" className="py-40 w-4/5 lg:w-1/2 m-10 text-4xl rounded-xl shadow-lg font-medium cursor-pointer hover:text-cornell flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out fade-in">
                            <h1>Videos</h1>
                            <h3 className="text-lg w-2/3 text-black opacity-60 text-center">Discover all of our videos! Here you will find video-based tutorials.</h3>
                        </a>
                        <div className="py-40 w-4/5 lg:w-1/2 m-10 text-4xl rounded-xl shadow-lg font-medium cursor-pointer hover:text-cornell flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300 ease-in-out fade-in" onClick={() => navigate('/articles')}>
                            <h1>Articles</h1>
                            <h3 className="text-lg w-2/3 text-black opacity-60 text-center">Discover all of our articles! Here you will find text-based guides.</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-40"></div>
            <Footer/>
        </>
    )
}

export default Documentation;