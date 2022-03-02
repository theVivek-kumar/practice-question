import "./styles.css";
import { useState } from "react";

export default function App() {
  const [pass1, setpass1] = useState();
  const [pass2, setpass2] = useState();
  const [result, setresult] = useState();
  const [text, settext] = useState();
  const [counter, setcounter] = useState(40);
  const [Password, setPassword] = useState();
  const [msg, setmsg] = useState();
  const [previoustoggle, setprevioustoggle] = useState("show");
  const [previous, setprevious] = useState();

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
  function passwordCheck() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let testPassword = decimal.test(Password);
    if (testPassword) {
      console.log("Correct");
      setmsg("strong-password");
    } else {
      console.log("in-Correct");
      setmsg("weak-password");
    }
  }
  function showPassword() {
    if (previoustoggle === "show") setprevioustoggle("hide");
    setprevious("text");
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
      <h1> alphanumeric password</h1>
      <div className="question">
        <p>
          password should contain one uppercase 1 lowercase and special
          chaaracter
        </p>
        <input
          className="input-3"
          placeholder="what's happning"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3>{msg}</h3>
        <button className="btn1 btn" onClick={passwordCheck}>
          submit
        </button>
      </div>
      <h1> show password</h1>
      <div className="question">
        <p>
          <ul>
            <li> Put a button show password near the input element.</li>
            <li>
              {" "}
              Text on show password should change to hide password when password
              is shown..
            </li>
          </ul>
        </p>
        <input
          className="input-3"
          placeholder="password"
          value={previous}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3>{msg}</h3>
        <button className="btn1 btn" onClick={showPassword}>
          {previoustoggle}
        </button>
      </div>
    </div>
  );
}
