import React from 'react';
import './Welcome.css';

const Welcome =({ onRouteChange })=>{
        return (
          <div>
            <header className="mt-3">Celebrity Recognition</header>
            <section id="description">
              <div>Hi there!</div>
              <div>Do you have a photo of an actor or actresses you want to find movies with but you do not know who they are?</div>
              <div>Or do you want to find out the name of a sportsman, scientist or other famous people?</div>
              <div>With celebrity recognition app you can find the name of a person with one click!</div>
              <div>Just paste the image address into the search bar and you will know the name of a person you are looking at!</div>
              <div>Sign in and let some magic happen!</div>
              <img src="https://media.giphy.com/media/VGOOr5qPAPrXIQlJ5i/giphy.gif" className="mt-3" alt=""/>
              <button className="btn w-50 btn-outline-primary mt-1" onClick = {()=>onRouteChange('register')}>Create an account</button>
              <button className="btn w-50 btn-outline-primary mt-3" onClick = {()=>onRouteChange('signin')}>Sign in </button>
            </section>
            
            </div>
  
        )
}

export default Welcome