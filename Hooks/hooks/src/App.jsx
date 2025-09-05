import './App.css';
import Card from './Components/card.jsx';
import Button from './Components/Button.jsx';

function App() {
  const [count,setCount] = useState(0);

  function handleClick(){ 
    setCount(count+1);

  }
  return(
    <div>
      <Button handleClick={handleClick}
      text="Click Me!"/>
    </div>
  )

  
}

export default App
