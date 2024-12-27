import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';



const newElement = React.createElement(
    'a',
    {href:"https://youtube.com"},
    'Go YouTube'
)

function Myapp(){
    return(
        <h1>My custom react app</h1>
    )
}

createRoot(document.getElementById('root')).render(
  
    <App />

    // <Myapp/>

    // newElement
)
