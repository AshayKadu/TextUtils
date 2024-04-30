
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light');
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor= '#023047';
    document.body.style.color= 'white';
    console.log(mode);
    showAlert("Dark mode has been Enabled", "success");
    document.title = 'TextUtils - Dark';
  } else {
    setMode("light");
    document.body.style.backgroundColor= 'white';
    document.body.style.color= 'black';
    console.log(mode);
    showAlert("Light mode has been Enabled", "success");
    document.title = 'TextUtils - light';
  }}
  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" aboutText = "About TextUtils"  mode={mode} toggleMode={toggleMode} /> 
    <Alert alert= {alert}/>
  {/* <Navbar/> */}
  <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element ={<About/>}> */}
            
          {/* </Route> */}
          <TextForm heading= "Enter the text to analyze below" showAlert={showAlert} mode= {mode} />
          {/* </Route> */}
        {/* </Routes> */}
        
  </div>
    
    {/* </Router> */}
  </>
  );
}

export default App;
