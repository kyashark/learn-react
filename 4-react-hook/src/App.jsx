import { useState } from 'react'
import './App.css'

const [state, setState] = useState(initialValue);

function App() {
 
	 const  [counter,setCounter] = useState(0);

  const increment =()=>{
    setCounter(counter + 1);
  }

  const decrement=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <div>      
      <h2>React Hook</h2>
      <h1>Counter</h1>
      <div className="card">
        <h3>Counter Value: {counter}</h3>
        <button onClick={increment}>Increase</button>
        {"  "}
        <button onClick={decrement}>Decrease</button>
        
        </div>
     </div>
    </>
  )
} 

export default App
