
import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewPosts(props) {
    return (
        <div className="container">
            <div className="post-header">
                <h1 className="post-title">Food Post</h1>
            </div>

            <div className="post-card">
                <div className="post-image">
                    <img className="card-img-top" src="" alt="PHOTO" />
                </div>
                <div className="post-details">
                    <p className="restaurant-name">Restaurant Name</p>
                    <p className="date-posted">Date Posted</p>
                    <hr className="divider" />
                    <p className="post-info">Email:</p>
                    <p className="post-info">Cuisine:</p>
                    <p className="post-info">Food Inventory List:</p>
                    <div className="food-inventory-table">
                        <p className="table-placeholder">Food Inventory Table</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
