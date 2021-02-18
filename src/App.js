import React,{ useState } from 'react';
import './App.css';

function App() {
  const [input, setinput] = useState ("");
  const [messages, setMessages] =useState ([]);
  console.log (input);
  console.log(messages);

  const sendMessage = (event) =>{
    // All the logic to send the message goes here 
    event.preventDefault();
    setMessages ([...messages, input]);
    setinput('');
  }
  return (
    <div className="App">
      <h1>Hello There am clean</h1>

      <form>
      <input value = {input} onChange = {event => setinput(event.target.value)}/>
      <button type = "submit" onClick = {sendMessage}>Send Message </button>
      </form>
{
      messages.map(message => (
        <p>{message}</p>
      ))
}
    </div>
  );
}

export default App;
