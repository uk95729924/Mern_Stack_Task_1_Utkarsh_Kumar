import React from "react";
import Counter from "./Counter"; // Assuming the Counter component is in the same folder
import './styles.css'; // Make sure styles.css is in the same folder as App.js

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>My Counter App</h1>
      <Counter /> {/* Render the Counter component */}
    </div>
  );
}

export default App;
