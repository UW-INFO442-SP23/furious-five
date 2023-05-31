import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewPosts(props) {
    return(
        <div className="home-container" style={{paddingBottom: "20px"}}>

            <div className="formheader">
                <div className="container">
                    <div class="p-2">
                        <section className="post">
                            <h1 className="post">Food Post</h1>
                        </section>
                    </div>
                </div>
            </div>

            <div>
                <div class="view-post-card">
                        <div class="view-card">
                            <img class="view-photo" src="" alt="PHOTO"/>
                            <div class="view-body">
                                <p class="card-text" style={{fontSize: "30px"}}><b>Restaurant Name</b></p>
                                <p class="card-text" style={{fontSize: "20px"}}>Date Posted</p>
                                <hr style={{border: "1px solid"}}></hr>
                                <p class="card-text">Email:</p>
                                <p class="card-text">Cuisine:</p>
                                <p class="card-text">Food Intentory List:</p>
                                <div class="inventory-display" >
                                    <p class="card-text">Food Inventory Table</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    )
}