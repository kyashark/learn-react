import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(6);
  const [numberAllowed,setNumberAllowed] = useState();
  const [charAllowed,setCharAllowed] = useState();
  const [password,setPassword] = useState();

  const passwordRef = useRef(null);

  const GeneratePassword = useCallback(()=>{
    let pass=''
    let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str+="!@$$%^&*()_+"

    for(let i=1;i<length;i++){
      const char = Math.floor((Math.random()*str.length)+1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])


  useEffect(()=>{
      GeneratePassword()
  },[length,charAllowed,numberAllowed])


  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  } 


  return (
     <div className="container">
        <h3>Password Generator</h3>
        <div className="section password-text">
          <input 
            type='text' 
            value={password}
            placeholder='Password' 
            readOnly
            ref={passwordRef}
              >
          </input>
          <button 
            onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="section">
          <div className='tag'>
          <input 
            type="range" 
            min={6} 
            max={40}
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            name=""
            id="length"
            />
          <label for="length">Length {length}</label>
          </div>

          <div className='tag'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            id="number"
          />
          <label for='number'>Numbers</label>
          </div>

          <div className='tag'>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            id="char"
          />
          <label for='char'>Characters</label>
           </div>
          
         
        </div>
     </div>
  )
}

export default App
