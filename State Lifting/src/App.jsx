import { useState } from 'react';
import './App.css';
import Card from './Components/Card.jsx';


function App() {
  const [name, setName] = useState('');
  

  return (
  <div>
    <Card title='Card1' name={name} setName={setName}/>
    <Card title='Card2' name={name} setName={setName}/>
    <p>I am inside parent components and value of name is</p>
    

    
  </div>
  )
}

export default App
