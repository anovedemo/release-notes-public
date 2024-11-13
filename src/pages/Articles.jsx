import Header from "../components/Header";
import Footer from "../components/Footer";
import Release from "../components/Release";
import { useState } from "react";
import 'animate.css';
import Article from "../components/Article";

function Articles( { currentSession, logout, articleData }) {
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

    if (!articleData) {
        return (
            <div>
                <Header currentSession={currentSession} logout={logout}/>
                <div className="flex justify-center">
                    <h1 className="text-xl animate__animated animate__fadeIn">Loading articles...</h1>
                </div>
            </div>
        )
    } else {
        const [shownArticles, setShownArticles] = useState([]);
        const [seenCategories, setSeenCategories] = useState([]);

        const articles = articleData.map(
            item =>
            <div key={item.id}>
                <div
                    onClick={
                        shownArticles.includes(item.id) ?

                        // OnClick removes the clicked item from the showArticles array.
                        () => setShownArticles((prevState) => prevState.filter(id => id !== item.id)) :

                        // OnClick adds the clicked item to the showArticles array.
                        () => setShownArticles((prevState) => [...prevState, item.id])
                    }
                    className="dropdown hover:bg-midblue hover:bg-opacity-10 p-3 rounded-md transition-colors duration-300 ease-in-out"
                >
                    <img src="/arrow_right.svg" />
                    <h4>{item.title}</h4>
                </div>
                <div>
                    {shownArticles.includes(item.id) && <Article clickedArticle={item.id} articleData={articleData}/>}
                </div>
            </div>
        )

        return (
            <>
                <Header currentSession={currentSession} logout={logout}/>
                {
                    (shownArticles.length > 0) ?
                    <div className="flex justify-center pt-10">
                        <div className="w-[90%] lg:w-2/3">
                        <Article clickedArticle={shownArticles[0]} articleData={articleData}/>
                        <div className="divider"></div>
                        <button
                                type="button"
                                className="rounded-md bg-cornell px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cornell_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => setShownArticles([])}
                            >
                                Go Back
                        </button>
                        </div>
                    </div>
                    :
                    <div className="flex justify-center fade-in">
                        <div className="w-[90%] lg:w-2/3">
                            <h1 className="text-4xl font-medium pt-14 pb-2">All Articles</h1>
                            <p>Here you can find all of our text based guides.</p>
                            <div className="divider"></div>

                            {articles}
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default Articles;