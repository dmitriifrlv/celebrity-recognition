import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/Navigation/ImageLinkForm';
import Rank from './Components/Navigation/Rank';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Welcome from './Components/StartPage/Welcome'

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

const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    name: '',
    // route: 'signin',
    route: 'welcome',
    user: {
      id: '',
      username: '',
      email: '',
      entries: 0,
      joined: ''
    } 
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      username: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
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
      fetch('https://warm-retreat-42776.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
        .then(response => {
          console.log('hi', response)
          if (response) {
            fetch('https://warm-retreat-42776.herokuapp.com/image', {
              method: 'put',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(response => response.json())
              .then(count => {
                this.setState(Object.assign(this.state.user, { entries: count}))
              })
              .catch(console.log)
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }
 
  onRouteChange = (route) => {
    if (route === 'signout' || route ==='signin' || route === 'welcome') {
      this.setState(initialState)
    }
    this.setState({route:route})
  }

  render() {
    const {route, name, box, imageUrl} = this.state;
    return(
      <div className="App">
        <Particles className="particles"
        params={particles} /> 
        { route === 'home' 
          ? <div>
          <Navigation onRouteChange={this.onRouteChange}/>
          <Logo/>
          <Rank 
          name = {name} 
          username={this.state.user.username} 
          entries = {this.state.user.entries}/>
          <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition 
          box={box} 
          imageUrl={imageUrl}/>
          </div> 
          : (
            route === 'signin' 
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : (route === 'welcome' 
          ? <Welcome onRouteChange={this.onRouteChange}/>
          :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>)
          )
        }
      </div>
    )
  }
}

export default App;