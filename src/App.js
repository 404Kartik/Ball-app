// Import necessary modules
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import Cookies library for handling browser cookies
import "./App.css"; // Import CSS file for styling

// Define functional component App
const App = () => {
  // State variables to manage ball color and counts
  const [ballColor, setBallColor] = useState("");
  const [redCount, setRedCount] = useState(0);
  const [blueCount, setBlueCount] = useState(0);

  // useEffect hook to handle side effects
  useEffect(() => {
    // Retrieve stored values from cookies or initialize them if not present
    let storedBallColor = Cookies.get("ballColor");
    let storedRedCount = parseInt(Cookies.get("redCount") || "0", 10);
    let storedBlueCount = parseInt(Cookies.get("blueCount") || "0", 10);
    
    // If ball color is not stored, randomly choose one and store it
    if (!storedBallColor) {
      storedBallColor = Math.random() < 0.5 ? "red" : "blue";
      Cookies.set("ballColor", storedBallColor);
    }
    
    // Increment respective count based on stored ball color
    if (storedBallColor === "red") {
      storedRedCount++;
      Cookies.set("redCount", storedRedCount);
    } else {
      storedBlueCount++;
      Cookies.set("blueCount", storedBlueCount);
    }
    
    // Update state variables with stored values
    setBallColor(storedBallColor);
    setRedCount(storedRedCount);
    setBlueCount(storedBlueCount);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Render component
  return (
    <div id="container">
      <div id="container-data">
        {/* Display ball image and its color */}
        <h2 id="ball-image">
          {ballColor === "red" ? "🔴" : "🔵"} {`${ballColor} ball`}
        </h2>
        {/* Display count of red and blue balls */}
        <div id="report">
          <p id="red-count">Red ball seen: {redCount} times</p>
          <p id="blue-count">Blue ball seen: {blueCount} times</p>
        </div>
      </div>
    </div>
  );
};

// Export App component as default
export default App;
