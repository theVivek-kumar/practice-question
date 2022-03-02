import "./styles.css";
import { useState } from "react";

export default function App() {
  const [pass1, setpass1] = useState();
  const [pass2, setpass2] = useState();
  const [result, setresult] = useState("");
  const [text, settext] = useState();
  const [counter, setcounter] = useState(40);

  console.log(pass1, pass2);

  function checkPassword() {
    console.log("clicked");
    if (pass1 === pass2) {
      console.log("successs");
      setresult("password-match");
    } else {
      console.log("mismatch");
      setresult("password-mis-match");
    }
  }
  function twitterFunction() {
    console.log("twitter");
    const textvalue = text.length;
    console.log(textvalue);
  }

  return (
    <div className="App">
      <h1>PASSWORD MATCH</h1>
      <div className="question">
        <div className="input-2">
          <input
            className="input-1"
            value={pass1}
            onChange={(e) => setpass1(e.target.value)}
          />
          <input
            className="input-1"
            value={pass2}
            onChange={(e) => setpass2(e.target.value)}
          />

          <button className="btn1" onClick={checkPassword}>
            check
          </button>

          <h3>{result}</h3>
        </div>
      </div>
      <h1>twitter</h1>
      <div className="question">
        <div className="twitter">
          <input
            className="input-3"
            placeholder="what's happning"
            value={text}
            onChange={(e) => setpass2(e.target.value)}
          />
          <h3>{}40</h3>
          <button className="btn1 btn" onClick={twitterFunction}>
            tweet
          </button>
        </div>
      </div>
    </div>
  );
}
