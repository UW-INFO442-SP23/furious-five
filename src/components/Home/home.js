import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
        <div className="home-container">

            <section className="about">
            <h1 className="about">FOODLINK</h1>
            <p className="about">Tagline/Mission statement. </p>
            </section>

            <section className="community">
                <h2 className="community">COMMUNITY</h2>
                <p className="community">Find food using our forum and collect extra inventory items from restaurants near you.</p>
                <button Link to="/Posts" className="btn btn-outline-primary">Forum</button>
            </section>

            <section className="contribute">
                <h2 className="contribute">CONTRIBUTE</h2>
                <p className="contribute"> Own a restaurant and want to contribute to reducing food waste? Join and post your remaining food inventory.</p>
                <button Link to="/Form" className="btn btn-outline-primary2">Create a post</button>
            </section>

        </div>
    )
}