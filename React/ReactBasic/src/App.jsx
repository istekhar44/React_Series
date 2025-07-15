import Card from './Components/Card.jsx'
import Girl from './assets/Girl.jpg'
import Men from './assets/Men.jpeg'
import Article from './assets/Article.jpeg'



import './App.css'

function App() {
  

  return (
    <div className="container" >
      <Card name="Maharana" desc="King of Mewar" img={Girl}/>
      <Card name="Pratap" desc="King of Rajasthan" img={Men}/>
      <Card name="Akbar" desc="King of Delhi" img={Article}/>
      
    </div>
  )
}

export default App
