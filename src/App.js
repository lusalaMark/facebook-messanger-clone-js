import React,{ useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState ("");
  console.log (input);
  
  return (
    <div className="App">
      <h1>Hello There am clean</h1>
      <input value = {input} onChange = {event => setinput(event.target.value)}/>
      <button>Send Message </button>
    </div>
  );
}

export default App;
