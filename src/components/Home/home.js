import React from 'react';

export default function Home(props) {
    return (
        <div className="home-container">

            <section className="about">
            <h1 className="about">FOODLINK</h1>
            <p className="about">A space for restaraunts to connect with non-profit organizations aiming to reduce food waste. </p>
            </section>

            <section className="community">
                <img className="community" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/community.jpg?raw=true" alt="restaurant building"/>
                <h2 className="community">COMMUNITY</h2>
                <p className="community">Find food using our forum and collect extra inventory items from restaurants near you.</p>
                <a href="/Forum">
                    <button className="button communitybtn">Forum</button>
                </a>
            </section>

            <section className="contribute">
                <img className="contribute" src="https://github.com/UW-INFO442-SP23/furious-five/blob/main/img/contribute.jpg?raw=true" alt="various food dishes on a table"/>
                <h2 className="contribute">CONTRIBUTE</h2>
                <p className="contribute"> Own a restaurant and want to contribute to reducing food waste? Join and post your remaining food inventory.</p>
                <a href="/Form">
                    <button className="button contributebtn">Create a post</button>
                </a>
            </section>

            <section className="video">
                <iframe align="center" src="https://www.youtube.com/embed/ishA6kry8nc"></iframe>
                <h2 className="video">LEARN MORE</h2>
                <p className="video"> Watch this video to learn more about the impact of food waste.</p>
                <p>Have questions about food regulations?
                <a href="https://www.fda.gov/food/guidance-regulation-food-and-dietary-supplements"> Click here to learn about FDA regulations</a></p> 
            </section>

        </div>
    )
}