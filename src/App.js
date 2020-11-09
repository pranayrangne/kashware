import React from "react";
import './App.css';
import Header from "./components/header";
import Kard from "./components/kard";
import Visa from "./components/visa";
function App() {
  const letterSceneStyle = {
    height: "400vh",
  }
  return (
    <>
      <Header />
      <div className="container" style={letterSceneStyle}>
        <Kard>
        </Kard>
        <Visa />
        {/* <img width="200px" height="200px" src="https://encased-locations.000webhostapp.com/photo/kfan.png" alt="" /> */}
      </div>
    </>
  );
}

export default App;
