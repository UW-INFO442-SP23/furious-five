import React from 'react';

export default function Footer(props) {
    return (
        <div className="container-fluid" style={{backgroundColor: "#3D3E3C"}}>
            <div className="row" style={{paddingTop: "20px"}}>
                <div style={{paddingLeft: "40px", color: "white"}}>
                    <h5>Contact Us</h5>
                    <span>Email: support@foodlink</span>
                    <br></br>
                    <span>Phone: (206) 123-4567</span>
                    <p>&copy; FoodLink 2023</p>
                </div>
            </div>
        </div>

    )
}