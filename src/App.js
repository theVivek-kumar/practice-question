import "./styles.css";
import { useState } from "react";

export default function App() {

  const [pass1,setpass1]= useState();
  const [pass2,setpass2]= useState();
  const [result,setresult]=useState();
 console.log(pass1,pass2);

 function checkPassword(){
   console.log("clicked")
   if(pass1===pass2){

   console.log("successs")
   setresult("password-match");
   }

   else{
   console.log("mismatch")
   setresult("password-mis-match");
   }


 }



  return (
    <div className="App">
      <h1>PASSWORD MATCH</h1>
      <div className="input-2">
      <input  className="input-1" value= {pass1} onChange={(e)=>setpass1(e.target.value)} />
      <input className="input-1" value= {pass2} onChange={(e)=>setpass2(e.target.value)} />
      <button  className = "btn1" onClick ={checkPassword}>check</button>
      </div>
     
    </div>
  );
}
