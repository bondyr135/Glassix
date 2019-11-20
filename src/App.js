import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import { IPDataKey } from './utils';
import MapComponent from './components/map/map';
import Header from './components/header/header';
import Footer from './components/footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      lat: '',
      long: '',
      fact: ''
    }
  }

  componentDidMount() {

    axios.get(`https://api.ipdata.co/?api-key=${IPDataKey}`)
      .then(res => {
        const data = res.data;
        this.setState({
          city: data['city'],
          country: data['country_name'],
          lat: data['latitude'],
          long: data.longitude
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          city: 'Somewhere',
          country: 'Anywhere',
          lat: '29.903909',
          long: '34.999227'
        })
      })
  }



  render() {
    return (
      <div className="App" >
        <Header 
          city={this.state.city} 
          country={this.state.country}/>
        <MapComponent className="map_component"
          city={this.state.city}
          country={this.state.country}
          lat={this.state.lat}
          long={this.state.long}
        />
        <Footer city={this.state.city} />
      </div>
    );
  }
}

export default App;
