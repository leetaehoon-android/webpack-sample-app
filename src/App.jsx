import React from "react";
import "../public/sample.vtt";

function App() {
    // return <video width="100%" controls autoPlay muted>
    return <video width="600" height="400" controls>
        <source
            src="https://file-examples.com/storage/fe8a7837bf63ad8783d6a5d/2017/04/file_example_MP4_480_1_5MG.mp4"
            type="video/mp4"/>
        <track label="English" kind="subtitles" srcLang="en" src="sample.vtt" />
    </video>
}

export default App;