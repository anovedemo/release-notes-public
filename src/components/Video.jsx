function Video({ clickedVideo, videoData }) {
    let id;
    for (let i = 0; i < videoData.length; i++) {
        if (videoData[i].id == clickedVideo) {
            id = i
        }
    }

    return (
        <div className="fade-in flex flex-col items-center">
            <h1 className="text-4xl font-medium mb-8">{videoData[id].title}</h1>
            <iframe
                className="w-[100%] shadow-xl"
                style={{ aspectRatio: "16/9" }}
                src={videoData[id].url}>
            </iframe>
        </div>
    )
}

export default Video;