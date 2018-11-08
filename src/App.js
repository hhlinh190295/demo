import React, { Component } from 'react';
import './App.css';
import SideBar from "./containers/SideBar";
import ContentArea from "./containers/ContentArea";

class App extends Component {
  render() {
    return (
      <div className="Container">
          <SideBar />
          <ContentArea />
      </div>
    );
  }
}

export default App;
