import Header from "../components/Header";
import Footer from "../components/Footer";
import './ReleaseNotes.css'
import Release from "../components/Release";
import { useState } from "react";
import 'animate.css';

function ReleaseNotes({ currentSession, logout, releaseData }) {

    const currentDate = new Date();

    function formatDate(dateStr) {
        const date = new Date(dateStr);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        let formattedDate = date.toLocaleDateString('en-US', options);

        formattedDate = formattedDate.replace(/\b(\d+)\b/, (day) => {
            const suffix = day.endsWith('1') && !day.endsWith('11') ? 'st'
                        : day.endsWith('2') && !day.endsWith('12') ? 'nd'
                        : day.endsWith('3') && !day.endsWith('13') ? 'rd'
                        : 'th';
            return `${day}${suffix}`;
        });

        return formattedDate;
    }

    if (!releaseData) {
        return (
            <div>
                <Header currentSession={currentSession} logout={logout}/>
                <div className="flex justify-center">
                    <h1 className="text-xl animate__animated animate__fadeIn">Loading release notes...</h1>
                </div>
            </div>
        )
    } else {
        const [shownReleaseNotes, setShownReleaseNotes] = useState([]);

        const datesList = releaseData
            .filter(item => new Date(item.date) <= currentDate)
            .map(
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
                        className="dropdown hover:bg-midblue hover:bg-opacity-10 p-3 rounded-md transition-colors duration-300 ease-in-out"
                    >
                        {
                            shownReleaseNotes.includes(item.id) ?
                            <img src="/arrow_down.svg" /> :
                            <img src="/arrow_right.svg" />
                        }
                        <h4>{formatDate(item.date)}</h4>
                    </div>
                    <div>
                        {shownReleaseNotes.includes(item.id) && <Release clickedRelease={item.id} releaseData={releaseData}/>}
                    </div>
                    <div className="divider my-2"></div>
                </div>
        )

        return (
            <div>
                <Header currentSession={currentSession} logout={logout}/>
                <div className="fade-in">
                    <div class="bg-white py-10 mb-8 sm:py-10 lg:px-6">
                        <div class="mx-auto max-w-2xl text-center w-[90%] lg:w-2/3">
                            <h1 class="lg:mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl bg-gradient-to-r from-cornell to-midblue inline-block text-transparent bg-clip-text animate__animated animate__fadeInDown">Release Notes</h1>
                            <p class="mt-6 text-md md:text-lg leading-8 text-gray-600 animate__animated animate__fadeInUp">Stay updated with the latest features, improvements, and bug fixes in the Anove app. Here, you’ll find detailed information on recent updates.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[90%] lg:w-2/3">
                            <h2 className="text-2xl font-medium">Latest Release Notes</h2>
                            <p>Here you can find the release notes for the most recent Anove version.</p>
                            <div className="divider mb-2"></div>

                            <div className="animate__animated animate__fadeInUp">{datesList}</div>
                        </div>
                    </div>
                    <div class="bg-white py-10 mb-8 sm:py-10 lg:px-6">
                        <div class="mx-auto max-w-2xl text-center w-[90%] lg:w-2/3">
                            <h2 class="lg:mt-2 text-xl font-bold tracking-tight text-gray-900 md:text-3xl bg-gradient-to-r from-cornell to-midblue inline-block text-transparent bg-clip-text fade-in">Feedback</h2>
                            <p class="mt-6 text-sm md:text-md text-gray-600 fade-in">
                            We value your feedback! If you encounter any issues, have suggestions for improvements, or want to share your thoughts about the application, please don't hesitate to reach out to our support team via Intercom or email <a href="mailto:contact@anove.ai" className="text-midblue">contact@anove.ai</a>.
                            <br></br>
                            <br></br>
                            We deeply appreciate your support and trust in Anove, and we are committed to continuously improving our platform to help safeguard your organization's information security and compliance needs
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ReleaseNotes;
