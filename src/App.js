import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, logIn } from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br /><br />
      <button onClick={() => dispatch(logIn())}>{isLogged ? "log out" : "log in"}</button>
      {isLogged ? <h3>valuable info you should only see if logged in</h3> : ""}
    </div>
  );
}

export default App;
