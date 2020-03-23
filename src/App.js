import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/header";
import Home from "./component/home";
import Education from "./component/education";
import Internship from "./component/internship";
import Project from "./component/project";
import Contact from "./component/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header className="App-bar"> </Header>
          <Home> </Home>
      </header>
        <Education> </Education>
        <Internship></Internship>
        <Project> </Project>
        <Contact> </Contact>
    </div>
  );
}

export default App;
