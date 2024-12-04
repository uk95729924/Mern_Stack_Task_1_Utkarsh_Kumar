import { useState, useCallback } from "react";

function useStorage(key, initialValue, storageType = "local") {
  // Determine storage type
  const storage = storageType === "session" ? sessionStorage : localStorage;

  // Memoize the getStoredValue function with useCallback
  const getStoredValue = useCallback(() => {
    try {
      const storedValue = storage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading from storage", error);
      return initialValue;
    }
  }, [key, initialValue, storage]); // Dependencies: key, initialValue, storage

  const [value, setValue] = useState(getStoredValue);

  const setStoredValue = (newValue) => {
    try {
      // If the new value is a function, compute it
      const valueToStore =
        typeof newValue === "function" ? newValue(value) : newValue;

      // Store the value in the specified storage
      storage.setItem(key, JSON.stringify(valueToStore));

      // Update state
      setValue(valueToStore);
    } catch (error) {
      console.error("Error setting storage value", error);
    }
  };

  const removeStoredValue = () => {
    try {
      storage.removeItem(key);
      setValue(undefined);
    } catch (error) {
      console.error("Error removing storage value", error);
    }
  };

  return [value, setStoredValue, removeStoredValue];
}

export default useStorage;
