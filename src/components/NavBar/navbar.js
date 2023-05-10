import React from 'react';

export default function NavBar(props) {
    return (
        <div className="navigator">
            <li><a className="navigator" href="/Home">Home</a></li>
            <li><a className="navigator" href="/Posts">Forum</a></li>
            <li><a className="navigator" href="/Form">Create a post</a></li>
        </div>
    )
}