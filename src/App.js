import React from "react";

import Projects from "./projects/Projects";
import About from "./about/About";
import Resume from "./resume/Resume";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/projects">
    //       <Projects />
    //     </Route>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/resume">
    //       <Resume />
    //     </Route>
    //     <Route path="/">
    //       <Redirect to="/projects" />
    //     </Route>
    //   </Switch>
    // </Router>
    <React.Fragment>
      <div>
        <img
          src="/imgs/construct1.jpg"
          className="w-screen"
        />
      </div>
      <div className="w-screen">
        <img
          src="/imgs/construct2.jpg"
          className="w-screen"
        />
      </div>
      <div className="w-screen">
        <img
          src="/imgs/construct3.jpeg"
          className="w-screen"
        />
      </div>
      <div className="w-screen">
        <img
          src="/imgs/construct4.png"
          className="w-screen"
        />
      </div>
    </React.Fragment>
  );
};

export default App;
