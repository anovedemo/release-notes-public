import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"

function LandingPage( { currentSession, logout } ) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b">
            <Header currentSession={currentSession} logout={logout} gradientMode={true}/>
            <div className="flex-grow fade-in flex flex-col items-center">
                <div className="mb-10"></div>
                <div class="mx-auto max-w-4xl text-center w-[90%] lg:w-full flex flex-col items-center">
                    <h1 class="lg:mt-2 text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl bg-gradient-to-r from-cornell to-midblue inline-block text-transparent bg-clip-text animate__animated animate__fadeInDown">Welcome to the Anove Docs!</h1>
                    <p class="mt-6 text-sm md:text-base leading-6 text-gray-800 animate__animated animate__fadeInUp">Discover everything you need to get the most out of Anove with our comprehensive resources. Explore step-by-step tutorials, insightful articles, and helpful videos designed to guide you through every feature and functionality.</p>
                    <div className="flex gap-10 m-8 mt-12 md:mt-8">
                        <button type="button" onClick={() => navigate("/documentation")} class="rounded-md bg-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 animate__animated animate__fadeIn">Documentation</button>
                        <button type="button" onClick={() => navigate("/release_notes")} class="rounded-md bg-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-nowrap text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 animate__animated animate__fadeIn">Release Notes</button>
                    </div>
                </div>
                <h1 className="text-xl font-medium mt-8">Featured Videos</h1>
                <div className="flex flex-col lg:flex-row gap-20 my-8 animate__animated animate__fadeIn items-center w-[95%] md:w-[60%]">
                    <iframe
                    className="shadow-lg h-full transition-all duration-300 ease-in-out w-full"
                    style={{ aspectRatio: "16/9" }}
                    src="https://www.youtube.com/embed/L7GSODnPoyU">
                    </iframe>

                    <iframe
                    className="shadow-lg transition-all duration-300 ease-in-out w-full"
                    style={{ aspectRatio: "16/9" }}
                    src="https://www.youtube.com/embed/d7h6OsjW49E">
                    </iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;