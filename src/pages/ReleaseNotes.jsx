import Header from "../components/Header";
import './ReleaseNotes.css'
import Release from "../components/Release";
import { useState } from "react";

function ReleaseNotes({ currentSession, logout, releaseData }) {
    if (!releaseData) {
        return (
            <div>
                <Header currentSession={currentSession} logout={logout}/>
                <div className="flex justify-center">
                    <h1 className="text-xl">Loading release notes...</h1>
                </div>
            </div>
        )
    } else {
        const [shownReleaseNotes, setShownReleaseNotes] = useState([]);

        const datesList = releaseData.map(
            item =>
            <div key={item.id}>
                <div
                    onClick={
                        shownReleaseNotes.includes(item.id) ?

                        // OnClick removes the clicked item from the showReleaseNotes array.
                        () => setShownReleaseNotes((prevState) => prevState.filter(id => id !== item.id)) :

                        // OnClick adds the clicked item to the showReleaseNotes array.
                        () => setShownReleaseNotes((prevState) => [...prevState, item.id])
                    }
                    className='dropdown'
                >
                    {
                        shownReleaseNotes.includes(item.id) ?
                        <img src="/arrow_down.svg" /> :
                        <img src="/arrow_right.svg" />
                    }
                    <h4>{item.date}</h4>
                </div>
                <div>
                    {shownReleaseNotes.includes(item.id) && <Release clickedRelease={item.id} releaseData={releaseData}/>}
                </div>
                <div className="divider"></div>
            </div>
        )

        return (
            <div>
                <Header currentSession={currentSession} logout={logout}/>
                <div className="fade-in">
                    <div class="bg-white py-10 mb-8 sm:py-10 lg:px-6">
                        <div class="mx-auto max-w-2xl text-center w-[90%] lg:w-2/3">
                            <h1 class="lg:mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl bg-gradient-to-r from-cornell to-midblue inline-block text-transparent bg-clip-text">Release Notes</h1>
                            <p class="mt-6 text-md md:text-lg leading-8 text-gray-600">Stay updated with the latest features, improvements, and bug fixes in the Anove app. Here, you’ll find detailed information on recent updates.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[90%] lg:w-2/3">
                            <h2 className="text-2xl font-medium">Latest Release Notes</h2>
                            <p>Here you can find the release notes for the most recent Anove version.</p>
                            <div className="divider"></div>

                            {datesList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReleaseNotes;