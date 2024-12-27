import {useCallback, useState} from 'react';
import Todos from './Todo';


function HookuseCallback(){

    const[count,setCount] = useState(0);
    const[todos,setTodos]= useState([]);

    const increment =()=>{
        setCount(count+1);
    };

    const addTodo=useCallback( ()=>{
        setTodos((t) => [...t,"New Todo"]);
    },[todos]);
    
   

    return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
    );
};

export default HookuseCallback;