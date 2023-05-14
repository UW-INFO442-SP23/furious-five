import React from 'react';

export default function NavBar(props) {
    return (
        <div className="navigator">
            <ul>
                <a className="navigator" href="/Home">Home</a>
                <a className="navigator" href="/Form">Forum</a>
                <a className="navigator" href="/Post">Create a post</a>
            </ul>
        </div>
    )
}