import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Black")

  const changeColor=(color)=>{
      setColor(color)
  }

  return (
    
    <div className='container' style={{backgroundColor:color}}>
    <h1>Background Color Changer</h1>
      <div className="section">      
        <button className='red' onClick={()=>{setColor('red')}}>Red</button>
        <button className='orange' onClick={() => changeColor('orange')}>Orange</button>
        <button className='yellow'onClick={()=>{setColor('yellow')}}>Yellow</button>
        <button className='green' onClick={()=>{setColor('green')}}>Green</button>
        <button className='blue'onClick={()=>{setColor('blue')}}>Blue</button>
        <button className='indigo'onClick={()=>{setColor('indigo')}}>Indigo</button>
        <button className='purple'onClick={()=>{setColor('purple')}}>Purple</button>
      </div>
    </div>
  
  )
}

export default App
