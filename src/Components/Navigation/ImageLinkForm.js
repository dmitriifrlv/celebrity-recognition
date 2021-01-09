import React from 'react';
import './input.css';

const ImageLinkForm =({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="col-md-6 offset-md-3 d-flex flex-column justify-content-center align-items-center">

        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="IMG URL" aria-describedby="button-addon2" onChange={onInputChange}/>
            <button className="btn btn-outline-primary" id="searchBtn" type="button" id="button-addon2"
            onClick={onButtonSubmit}>Detect</button>
        </div>
        </div>
    )
}

export default ImageLinkForm

