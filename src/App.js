import React, { useState } from "react";

export default function App() {
  const Colors = ["red", "green", "blue", "yellow", "brown", "purple"];
  return (
    <div className="App">
      <h1>LinkedIn Assesment</h1>
      <h2>Write a React functional button component, which will cycle through an array of colours passed to the component by a prop </h2>
      {Colors.map((color, key) => (
        <Button Color={color} Colors={Colors} key={key} />
      ))}
    </div>
  );
}
//Functions
function Button({ Color, Colors }) {
  // State
  const [color, setColor] = useState(Color);
  // regular function created to handle input change
  const handleChange = (e) => {
    e.preventDefault();
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  };
  // Styles
  const style = {
    backgroundColor: color
  };
  return (
    <button onClick={handleChange} style={style}>
      Click Me!
    </button>
  );
}