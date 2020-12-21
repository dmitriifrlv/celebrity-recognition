import Clarifai from 'clarifai';
import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Navigation/Logo';
import ImageLinkForm from './Components/Navigation/ImageLinkForm';
import Rank from './Components/Navigation/Rank';
import Particles from 'react-particles-js';


const app = new Clarifai.App({
 apiKey: '1f41edb8b2fa4470ac4bf5963d97dcb8'
});

  const particles = {
    "particles": {
        "number": {
            "value": 150
        },
        "size": {
            "value": 2
        },
        "density": { 
          "enable": true, 
          "value_area": 800, 
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (e) => {
    console.log(e.target.value)
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    .then(generalModel => {
      return generalModel.predict("@@sampleTrain");
    })
    .then(response => {
      var concepts = response['outputs'][0]['data']['concepts']
    })
  }
 
  render() {
    return(
      <div className="App">
        <div className = "text-end">
          <Navigation />
        </div>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {/* <FaceRecognition /> */}
        <Particles className="particles"
        params={particles} 
      /> 
      </div>
    )
  }
}

export default App;
