import React from "react";
import useStorage from "./hooks/useStorage";

function Counter() {
  const [count, setCount, removeStoredValue] = useStorage("counter", 0, "local");

  // Function to clear counter with confirmation
  const clearCount = () => {
    if (window.confirm("Are you sure you want to reset the counter?")) {
      removeStoredValue(); // Removes the value from storage and resets state
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={clearCount}>Clear</button> {/* Clear button with confirmation */}
    </div>
  );
}

export default Counter;
