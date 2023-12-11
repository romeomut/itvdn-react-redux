import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {increment, decrement, reload, addValue} from './store/counterSlice'

function App() {

const count = useSelector((state)=> state.counterValue.count)
const dispatch = useDispatch()
const [value, setValue] = useState(0)

function inc(){
  dispatch(increment())
}

function dec(){
  dispatch(decrement())
}

function add(){
  const val = Number(value)
  dispatch(addValue(isNaN (val) ? 0 : val))
}

  return (
   <>
      <h3>{count}</h3>
      <button onClick={inc}>INC +</button>
      <button onClick={dec}>DEC -</button>
      <button onClick={()=> dispatch(reload())}>RESET</button>

      <div>
        <input type="text" value={value} onChange={el => setValue(el.target.value)}/>
        <button onClick={add}>ADD</button>
      </div>
   </>
  );
}

export default App;
