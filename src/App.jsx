"use client";
import React from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import Card from "./Components/Card";
function App() {
  React
  return (
    <div className=" relative w-full h-screen  bg-zinc-800">
        <Background />
        <Foreground/>
        <Card/>
    </div>
  );
}
export default App;
