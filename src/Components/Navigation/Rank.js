import React from 'react';

const Rank =(props) => {
    return (
        <div>
            <div>
                You are looking at {props.name} 
            </div>
        </div>
    )
}

Rank.defaultProps = {name:'...'}
export default Rank

