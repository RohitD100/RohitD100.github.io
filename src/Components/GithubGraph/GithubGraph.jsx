import React from "react";
import GitHubCalendar from 'react-github-calendar';

const GithubGraph = () => {
    return (
        <div>

            <div className="about center">
                <h1>Github</h1>
                <GitHubCalendar username="RohitD100" />
                <br />
                <br />
                <img style={{ width: '50%' }} alt="Rohit" src="https://github-readme-stats.vercel.app/api/top-langs?username=RohitD100&show_icons=true&locale=en&layout=compact&theme=dracula" />
                <br />
                <br />
                <img style={{ width: '50%' }} src="https://github-readme-stats.vercel.app/api?username=RohitD100&amp;show_icons=true&amp;locale=en&amp;theme=dracula" alt="Rohit"></img>
                <br />
                <br />
                <img style={{ width: '50%' }} src="https://github-readme-streak-stats.herokuapp.com/?user=RohitD100&amp;theme=dracula" alt="Rohit"></img>
                <br />
                <br />
                {/* <img style={{ width: '50%' }} alt="Rohit Activity Graph" src="https://denvercoder1-activity-graph.herokuapp.com/graph/?username=RohitD100&amp;bg_color=1F222E&amp;color=F8D866&amp;line=F85D7F&amp;point=FFFFFF&amp;hide_border=true"></img> */}
                {/* <br /> */}
                {/* <br /> */}
                <img style={{ width: '50%' }} src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RohitD100&amp;theme=dracula" alt="img"></img>
                <br />
                <img style={{ width: '100%' }} src="https://github-profile-trophy.vercel.app/?username=RohitD100&theme=radical&no-frame=false&no-bg=false&margin-w=4" ></img>
            </div>

        </div>

    )
}

export default GithubGraph;