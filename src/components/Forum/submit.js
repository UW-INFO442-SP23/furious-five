import React from "react";
import '.../index.css'

function Submits(props) {
    const handleTabChange = props.handleTabChange;
    const form = props.form;
    return(
    <div className="form-submit">
        <button>
        className={`form-submit ${forms === 'submit' ? 'active' : ''}`}
        onClick={() => handleTabChange('submit')}
        </button>
    </div>
    )
}