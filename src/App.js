import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section id="Homepage">
       <Header />
      
      </section>

      <section id="BodySection">
         <Body />
      </section>


      
    </div>
  );
}

export default App;
