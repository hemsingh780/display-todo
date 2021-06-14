import './App.css';
import { useState } from 'react';

function App() {
const [state,setState] = useState({
  inputValue:''
})

const [todo,setTodo]  = useState({
  todoArr:[]
})


const valueStoreAndChange = (e) =>{
  if(e.key === 'Enter'){ 
   let arr = [...todo.todoArr]
   arr.push(state.inputValue)
   setTodo({todoArr:arr})
   setState({inputValue:''})
  }
}



const change = (e) =>{
   setState({inputValue:e.target.value}) 
}

let show = todo.todoArr.map((x,i) => {
  return (<p className='P' key={i}>{x}</p>)
})

return (

    <div className="App">
            <h2>Todo</h2>
            <input type='text'
             value={state.inputValue}
             onChange={change}
             onKeyDown={valueStoreAndChange}/>
           {show}
    </div>

  );
}

export default App;
