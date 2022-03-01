// import logo from './logo.svg';
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import {
//    BrowserRouter as Router, 
//   Switch, 
//   Route, 
//   Link
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#111160";
      showAlert("sucess , Dark mode is enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("sucess,Light mode is enabled");
    }
  };

  return (
    <>
      {/* <Navbar title="shweta" aboutText="About"/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
        <Navbar title="Bharti" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/"> */}
              <TextForm
                showAlert={setAlert}
                heading="Enter your text"
                mode={mode}
              />
            {/* </Route>
          </Switch> */}
          {/* <About /> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
