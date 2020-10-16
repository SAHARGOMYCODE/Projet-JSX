import React from "react";
import "./App.css";
import link from "./images/link.jpg";
import "./style.css";
import sidon from "./video/sidon.mp3";

function App() {
  return (
    <div className="App">
      <h1 class="title red">The legende of ZELDA</h1>
      <img src={link} alt="link" /> <br />
      <img src="image/zelda.jpg" alt="zelda" />
      <br />
      <audio controls src={sidon} />
    </div>
  );
}

export default App;
