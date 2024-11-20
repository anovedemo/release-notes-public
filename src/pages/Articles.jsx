import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import 'animate.css';
import Article from "../components/Article";

function Articles( { currentSession, logout, articleData }) {
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
                    <div className="flex justify-between w-full pr-4 items-center">
                        <h4 className="text-xl text-midblue font-medium">{item.title}</h4>
                        <h4 className="text-gray-500 font-medium">{item.category}</h4>
                    </div>
                </div>
                <div>
                    {shownArticles.includes(item.id) && <Article clickedArticle={item.id} articleData={articleData}/>}
                </div>
            </div>
        )

        return (
            <div className="flex flex-col min-h-screen">
                <Header currentSession={currentSession} logout={logout}/>
                <div className="flex-grow">
                    {
                        (shownArticles.length > 0) ?
                        <div className="flex justify-center pt-10 w-full">
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
                                <div className="animate__animated animate__fadeInUp">{articles}</div>
                            </div>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default Articles;