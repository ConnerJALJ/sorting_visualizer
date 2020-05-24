import { hot } from 'react-hot-loader/root';
import React, { Component} from "react";
import Nav from './Components/Nav/Nav';
import Visualizer from './Components/Visualizer/Visualizer';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Nav />
        <Visualizer />
      </div>
    );
  }
}

export default hot(App);