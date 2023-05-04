import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div className="home-container">

            <section className="about">
            <h1 className="about">FOODLINK</h1>
            <p className="about">A space for restaraunts to connect with non-profit organizations aiming to reduce food waste. </p>
            </section>

            <section className="community">
                <img className="community" src="./components/img/community.jpg" alt="restaurant building"/>
                <h2 className="community">COMMUNITY</h2>
                <p className="community">Find food using our forum and collect extra inventory items from restaurants near you.</p>
                <button Link to="/Posts" className="button communitybtn">Forum</button>
            </section>

            <section className="contribute">
                <img className="contribute" src="./components/img/contribute.jpg" alt="various food dishes on a table"/>
                <h2 className="contribute">CONTRIBUTE</h2>
                <p className="contribute"> Own a restaurant and want to contribute to reducing food waste? Join and post your remaining food inventory.</p>
                <button Link to="/Form" className="button contributebtn">Create a post</button>
            </section>

        </div>
    )
}