import React from "react";
import logo from "./logo.svg";
import "./App.css";
import link from "./images/link.jpg";
import "./style.css";
import sidon from "./video/sidon.mp3";

function App() {
  return (
    <div className="App">
      <h1 class="title red">The legende of ZELDA</h1>
      <p>
        {" "}
        <img src={link} />
      </p>
      <p>
        {" "}
        <img src="image/zelda.jpg" />{" "}
      </p>
      <audio controls src={sidon} />
    </div>
  );
}

export default App;
