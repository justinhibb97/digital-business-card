import React from "react"

export default function Main() {
    return (
        <main className="main">
            <div className="main--info">
                <h1 className="main--info--fullname">Justin Hibbard</h1>
                <h2 className="main--info--job">Software Developer</h2>
                <h3 className="main--info--website">justinhibbard.com</h3>
            </div>

            <div className="main--buttons">
                <button className="main--buttons--email">Email</button>
                <button className="main--buttons--linkedin">LinkedIn</button>
            </div>

            <div className="main--about">
                <h3 className="main--about--header">About</h3>
                <h4 className="main--about--info">I am a software developer with a particular interest in using react and automation with selenium. I try to keep up with the latest technology, and am always for looking for new things to learn.</h4>
            </div>

            <div className="main--interests">
                <h3 className="main--interests--header">Education</h3>
                <h4 className="main--interests--info">I graduated in 2019 from Westfield State University with a Bachelor of Science: Computer Science and also a Minor in Mathematics.</h4>
            </div>
        </main>
    )
}
