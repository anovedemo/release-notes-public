import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function Article({ clickedArticle, articleData }) {
    let id;
    for (let i = 0; i < articleData.length; i++) {
        if (articleData[i].id == clickedArticle) {
            id = i
        }
    }

    return (
        <div className="fade-in prose max-w-none prose-p:leading-tight prose-headings:leading-none prose-h1:mb-0 prose-headings:font-semibold mt-3">
            <Markdown remarkPlugins={[remarkGfm]}>{articleData[id].markdown}</Markdown>
        </div>
    )
}

export default Article;