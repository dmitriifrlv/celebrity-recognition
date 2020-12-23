import Clarifai from 'clarifai';
import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/Navigation/ImageLinkForm';
import Rank from './Components/Navigation/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
 apiKey: 'c8e4786b1c2348ac940c71517facda16'
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
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      name: ''
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    let name = data.outputs[0].data.regions[0].data.concepts[0].name;
    this.setState({name:name})
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

 

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (e) => {
    this.setState({input:e.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.CELEBRITY_MODEL, 
        this.state.input)
        .then(response => console.log(response))
      // .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
 
  render() {
    return(
      <div className="App">
        <Particles className="particles"
        params={particles} /> 
          <Navigation />
        <Logo/>
        <Rank name={this.state.name}/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
        
      </div>
    )
  }
}

export default App;
