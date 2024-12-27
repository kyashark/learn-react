import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [showMessage,setShowMessage] = useState(false);

  //  1. No dependency array: Runs after every render
  useEffect(()=>{
      console.log("This runs after every render");
  });

  // 2. Empty dependency array ([]): Runs only once when component mounts
  useEffect(()=>{
      console.log("This runs only once when the component mounts");
  },[]);

  // 3.With dependencies: Runs when showMessage state changes
  useEffect(() => {
      if (showMessage) {
        console.log("Message is now visible");
      }
  }, [showMessage]); // This effect depends on 'showMessage'

  // 4. Cleanup: Clear interval when component unmounts
 useEffect(() => {
     const interval = setInterval(() => {
     setCount((prevCount) => prevCount + 1);
 }, 500);

 // Cleanup function: Stops the interval when the component unmounts
 return () => {
   clearInterval(interval);
   console.log("Interval cleared (cleanup)");
 };
}, []); // Runs only once on mount and cleans up on unmount

 return(
      <div className='container'>
     <h1>Counter: {count}</h1>
     <button onClick={() => setShowMessage(!showMessage)}>
     {showMessage ? 'Hide' : 'Show'} Message
     </button>
      {showMessage && <p>The message is now visible!</p>}
 </div>
 )
}

export default App
