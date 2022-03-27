import { useState, useEffect } from 'react'

const useLocalStorage = keyName => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(keyName);
    try {
      return JSON.parse(storedValue);
    } catch(error) {
      return storedValue;
    }
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(keyName, stringifiedValue);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage
