import React,{ useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

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
  <FormControl>
  <InputLabel>Enter a message..</InputLabel>
  <Input value = {input} onChange = {event => setinput(event.target.value)}/> 
  <Button disabled = { ! input } variant="contained" color = "Primary" type = "submit" onClick = {sendMessage}>Send Message </Button> 
</FormControl>
      
      </form>
{
      messages.map(message => (
        <Message text = {message}/>
      ))
}
    </div>
  );
}

export default App;
