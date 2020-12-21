import React from 'react';

const ImageLinkForm =({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="col-md-6 offset-md-3 d-flex flex-column justify-content-center align-items-center">
            <div>
                <p>
                    Some magic will happen soon...maybe
                </p>
            </div>
            
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="IMG URL" aria-describedby="button-addon2" onChange={onInputChange}/>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
            onClick={onButtonSubmit}>Detect</button>
        </div>
        </div>
    )
}

export default ImageLinkForm

