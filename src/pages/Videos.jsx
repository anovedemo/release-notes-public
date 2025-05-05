import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import 'animate.css';
import Video from "../components/Video";

function Videos( { currentSession, logout, videoData } ) {
    if (!videoData) {
        return (
            <div>
                <Header currentSession={currentSession} logout={logout}/>
                <div className="flex justify-center">
                    <h1 className="text-xl animate__animated animate__fadeIn">Loading videos...</h1>
                </div>
            </div>
        )
    } else {
        const [shownVideos, setShownVideos] = useState([]);

        const videos = videoData.map(
            item =>
            <div key={item.id}>
                <div
                    onClick={
                        shownVideos.includes(item.id) ?

                        // OnClick removes the clicked item from the shownVideos array.
                        () => setShownVideos((prevState) => prevState.filter(id => id !== item.id)) :

                        // OnClick adds the clicked item to the shownVideos array.
                        () => setShownVideos((prevState) => [...prevState, item.id])
                    }
                    className="dropdown hover:bg-midblue hover:bg-opacity-10 p-3 rounded-md transition-colors duration-300 ease-in-out flex"
                >
                    <img className="hidden md:flex" src="/arrow_right.svg" />
                    <div className="flex-row md:flex justify-between w-full pr-2 lg:pr-4 items-center">
                        <h4 className="text-lg md:text-xl text-midblue font-medium">{item.title}</h4>
                        <h4 className="text-gray-500 text-sm md:text-base font-medium">{item.category}</h4>
                    </div>
                </div>
                <div>
                    {shownVideos.includes(item.id) && <Video clickedVideo={item.id} videoData={videoData}/>}
                </div>
            </div>
        )

        return (
            <div className="flex flex-col min-h-screen">
                <Header currentSession={currentSession} logout={logout}/>
                <div className="flex-grow">
                    {
                        (shownVideos.length > 0) ?
                        <div className="flex justify-center pt-10 w-full">
                            <div className="w-[90%] lg:w-2/3">
                            <Video clickedVideo={shownVideos[0]} videoData={videoData}/>
                            <div className="divider"></div>
                            <button
                                    type="button"
                                    className="rounded-md bg-cornell px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cornell_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setShownVideos([])}
                                >
                                    Go Back
                            </button>
                            </div>
                        </div>
                        :
                        <div className="flex justify-center fade-in">
                            <div className="w-[90%] lg:w-2/3">
                                <h1 className="text-4xl font-medium pt-14 pb-2">Videos</h1>
                                <p className="mb-6">Here you can find all of our video based guides.</p>
                                <h2 className="text-2xl md:hidden">Recommended Video</h2>
                                <h2 className="text-2xl hidden md:flex">Recommended Videos</h2>
                                <div className="divider"></div>
                                <div className="flex flex-col md:flex-row md:gap-10 mb-8">
                                    <a href="https://www.youtube.com/watch?v=L7GSODnPoyU">
                                        <img
                                            className="shadow-lg md:my-4 hover:scale-105 transition-all duration-300 ease-in-out hidden md:flex"
                                            style={{ aspectRatio: "16/9" }}
                                            src="https://img.youtube.com/vi/L7GSODnPoyU/maxresdefault.jpg">
                                        </img>
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=d7h6OsjW49E">
                                        <img
                                            className="shadow-lg my-4 hover:scale-105 transition-all duration-300 ease-in-out"
                                            style={{ aspectRatio: "16/9" }}
                                            src="https://img.youtube.com/vi/d7h6OsjW49E/maxresdefault.jpg">
                                        </img>
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=niukcmKUsPA">
                                        <img
                                            className="shadow-lg my-4 hover:scale-105 transition-all duration-300 ease-in-out hidden md:flex"
                                            style={{ aspectRatio: "16/9" }}
                                            src="https://img.youtube.com/vi/niukcmKUsPA/maxresdefault.jpg">
                                        </img>
                                    </a>
                                </div>
                                <h2 className="text-2xl">All Videos</h2>
                                <div className="divider"></div>
                                <div className="animate__animated animate__fadeInUp">{videos}</div>
                            </div>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default Videos;