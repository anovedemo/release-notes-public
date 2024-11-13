import Header from "../components/Header";
import './Documentation.css'
import { useNavigate } from "react-router-dom";

function Documentation( { currentSession, logout }) {
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
                    <div className="flex">
                        <div className="py-40 px-40 m-10 text-4xl rounded-xl font-medium shadow-lg cursor-pointer hover:text-cornell flex flex-col">
                            <h1>Videos</h1>
                        </div>
                        <div className="py-40 px-40 m-10 text-4xl rounded-xl font-medium shadow-lg cursor-pointer hover:text-cornell flex flex-col" onClick={() => navigate('/articles')}>
                            <h1>Articles</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documentation;