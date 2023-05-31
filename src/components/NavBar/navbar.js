import React from 'react';

export default function NavBar(props) {
    return (
        <div className="navigator">
            <ul>
                <a className="navigator" href="/Home">Home</a>
                <a className="navigator" href="/Forum">Community</a>
                {/* <a className="navigator" href="/Form">Create a post</a> */}
                <a href="/Login">
                    <button className="button loginbtn">Log In</button>
                </a>
            </ul>
        </div>
    )
}