import { useState } from 'react'
import './App.css'
import './index.css'

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
      <div className='container'>      
      <h2>React Hook useState</h2>
      <h1>Counter</h1>
      <div className="section">
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
