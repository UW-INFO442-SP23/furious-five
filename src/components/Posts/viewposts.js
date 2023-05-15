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
                <div class="container-fluid" style={{paddingRight: "150px", paddingLeft: "150px"}}>
                    <div class="card" style={{margin: "10px", borderRadius: "20px", boxShadow: "10px black"}}>
                        <img class="card-img-top"src="" alt="PHOTO" style={{padding: "90px", textAlign: "center"}}/>
                        <div class="card-body" style={{padding: "40px"}}>
                            <p class="card-text" style={{fontSize: "30px"}}><b>Restaurant Name</b></p>
                            <p class="card-text" style={{fontSize: "20px"}}>Date Posted</p>
                            <hr style={{border: "1px solid"}}></hr>
                            <p class="card-text">Email:</p>
                            <p class="card-text">Cuisine:</p>
                            <p class="card-text">Food Intentory List:</p>
                            <div class="card" style={{color: "D9D9D9", margin: "20px"}}>
                                <p class="card-text" style={{margin: "100px", textAlign: "center"}}>Food Inventory Table</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}