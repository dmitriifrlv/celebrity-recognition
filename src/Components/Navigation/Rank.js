import React from 'react';
import './input.css';

class Rank extends React.Component {
    // constructor() {
    //     super();
    //   }
    

    toUpperCase = (string) =>{
        let b=[];
        for (let i of string.split(' ')){
            console.log(i)
            b.push(i.charAt(0).toUpperCase() + i.slice(1));
            console.log(b)
        }
        return b.join(' ')
        
    }
    render(){
        const {name, entries, username} = this.props
        
        if (name.length>0) {
        let celebrityName = this.toUpperCase(name);
            return (
                <div>
                    <div>
                        {username}, you used this service {entries} times.
                    </div>
                    <div>
                        You are looking at <span className="name">{celebrityName}</span>  !
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        {username}, you used this service {entries} times
                    </div>
                    <div>
                        Some magic will happen soon...maybe
                    </div>
                </div>
            )
        }
        
    }
}

Rank.defaultProps = {name:'...'}
export default Rank

