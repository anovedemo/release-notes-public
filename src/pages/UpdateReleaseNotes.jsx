import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { supabase } from "../supabaseClient"
import MDEditor from '@uiw/react-md-editor';
import './UpdateReleaseNotes.css'

function UpdateReleaseNotes({currentSession, logout}) {
    if (!currentSession) {
        return (
            <div>
                <Header currentSession={currentSession} logout={logout} />
                <div className="flex justify-center fade-in">
                    <h1 className="text-xl text-red-600 font-bold">You are not authenticated!</h1>
                </div>
            </div>
        )
    }
    const navigate = useNavigate();

    const [triedSubmitting, setTriedSubmitting] = useState({date: false, md: false});

    const [currentMarkdown, setCurrentMarkdown] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");
    const [selectedType, setSelectedType] = useState("Release Note");

    console.log(currentMarkdown);
    console.log(currentDate);

    const uploadReleaseNotes = async (e) => {
        e.preventDefault();

        if (!currentDate) {
            setTriedSubmitting(prevState => ({...prevState, date: true}))
        }
        if (!currentMarkdown) {
            setTriedSubmitting(prevState => ({...prevState, md: true}))
            console.log(triedSubmitting)
        }
        if (!currentDate || !currentMarkdown) {
            return;
        }

        const releaseNote = {
            markdown: currentMarkdown,
            date: currentDate
        }

        const { data, error } = await supabase
            .from('release_notes')  // Target the `release_notes` table
            .insert([releaseNote]);  // Insert the releaseNote object

        if (error) {
            console.error("Error inserting release note:", error.message);
            setTriedSubmitting(true);
        } else {
            navigate("/");
        }
    }

    const uploadArticle = async (e) => {
        e.preventDefault();

        if (!currentDate) {
            setTriedSubmitting(prevState => ({...prevState, date: true}))
        }
        if (!currentMarkdown) {
            setTriedSubmitting(prevState => ({...prevState, md: true}))
            console.log(triedSubmitting)
        }
        if (!currentDate || !currentMarkdown) {
            return;
        }

        const article = {
            markdown: currentMarkdown,
            date: currentDate,
            title: currentTitle
        }

        const { data, error } = await supabase
            .from('articles')  // Target the `articles` table
            .insert([article]);  // Insert the article object

        if (error) {
            console.error("Error inserting article", error.message);
            setTriedSubmitting(true);
        } else {
            navigate("/");
        }
    }

    return (
        <>
            <Header currentSession={currentSession} logout={logout} />
            <div className="flex justify-center">
                <div className="flex items-center justify-center fade-in flex-col w-2/3 gap-4">
                    <h1 className="text-2xl font-medium pb-2">Upload</h1>
                    <div>
                        <select
                            id="location"
                            name="location"
                            defaultValue="Release Note"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm/6"
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option>Release Note</option>
                            <option>Article</option>
                        </select>
                    </div>
                    <div className="w-1/4 self-start">
                        <label>Select Date</label>
                        <div className={"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-[100%]" + (triedSubmitting.date && (!currentDate && " bg-red-50"))}>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                placeholder="Enter date"
                                onChange={(e) => setCurrentDate(e.target.value)}
                                className={"w-1/2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"}
                            />
                        </div>
                    </div>
                    {
                        (selectedType == "Article") &&
                        <div className="w-1/4 self-start">
                        <label>Title</label>
                            <div className="mt-2">
                                <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Some title"
                                onChange={(e) => setCurrentTitle(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    }
                    <div className="w-full custom-editor-container">
                        <MDEditor
                            value={currentMarkdown}
                            onChange={setCurrentMarkdown}
                            className={(triedSubmitting.md && (!currentMarkdown && " bg-red-50"))}
                        />
                        <MDEditor.Markdown source={currentMarkdown} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                    {
                        (selectedType == "Release Note") ?
                        <button
                        type="button"
                        class="self-end rounded-md bg-cornell px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cornell_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={uploadReleaseNotes}
                        >
                        Upload Release Note</button> :
                        <button
                            type="button"
                            class="self-end rounded-md bg-cornell px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cornell_light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={uploadArticle}
                        >
                        Upload Article</button>
                    }
                </div>
            </div>
        </>
    )
}

export default UpdateReleaseNotes;