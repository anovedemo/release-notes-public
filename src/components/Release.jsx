import './Release.css'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Release({ clickedRelease, releaseData }) {
    let id;
    for (let i = 0; i < releaseData.length; i++) {
        if (releaseData[i].id == clickedRelease) {
            id = i
        }
    }

    return (
        <div className='fade-in prose prose-p:leading-tight prose-headings:leading-none prose-h1:mb-0 prose-headings:font-semibold mt-3'>
            <Markdown remarkPlugins={[remarkGfm]}>{releaseData[id].markdown}</Markdown>
        </div>
    )
}

export default Release;