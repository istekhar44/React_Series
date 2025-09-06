
import { useState } from 'react'
import './App.css'
import Logout from './Components/Logout';
import Login from './Components/Login';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);
  
  if(!isLoggedIn){   //This is the Early Return operator
    return(
      <Login/>
    )
  }

  return(
    <div>
      <h1>Welcome Everyone to codeHelp web Dev course</h1>
      <div>
        {isLoggedIn && <Logout/>}    //This is the turnery operator
      </div>
    </div>
  )




  // if(isLoggedIn){          //This is the if and Else operator 
  //   return(
  //     <Logout/>
  //   )
  // }

  // else{
  //   return(
  //     <Login/>
  //   )
  // }
}

export default App
