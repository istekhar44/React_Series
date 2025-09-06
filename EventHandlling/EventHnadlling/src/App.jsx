import './App.css'

function App() {
 

  function handleClick(){          //Function 1
    alert('hellow');
  }
  
  function handleMouse(){                  //Function 2
    alert("You are on the over the para");
  }

  function handleInputChange(e){
    console.log("Input me value change hui ha ", e.target.value);
  }

  function handleSummit(e){
    e.prevDefault();
    //i am writing my custom behaviour
    alert('summit Ker du kya ');

  }



  return (
   <div>
    <form>
      <input type="text" onChange={ handleInputChange}  />
      <button type="summit">Summit</button>

    </form>

    <p onMouseOver={handleMouse} style={{ border: "1px solid balck"}} >    
      Lorem ipsum dolor sit.
    </p>

    <button onClick={handleClick}>    
      ClickMe           
    </button>

   </div>

  )
}

export default App
