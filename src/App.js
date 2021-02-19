import React,{ useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setinput] = useState ("");
  const [messages, setMessages] =useState ([
    {username: 'Mark', text: 'I am happy with react'},
    {username: 'Shammah', text: 'I am happy comming'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    //prompt ('Please enter your name... ')
    setUsername(prompt('Please Enter your name'))
  }, [])

  const sendMessage = (event) =>{
    // All the logic to send the message goes here 
    event.preventDefault();
    setMessages ([
      ...messages, {username:username, text: input}]);
    setinput('');
  }
  return (
    <div className="App">
      <h1>Hello There am clean</h1>
      <h2>Welcome {username}</h2>
      <form>
  <FormControl>
  <InputLabel>Enter a message..</InputLabel>
  <Input value = {input} onChange = {event => setinput(event.target.value)}/> 
  <Button disabled = { ! input } variant="contained" color = "Primary" type = "submit" onClick = {sendMessage}>Send Message </Button> 
</FormControl>
      
      </form>
{
      messages.map(message => (
        <Message username = {username} message = {message}/>
      ))
}
    </div>
  );
}

export default App;
