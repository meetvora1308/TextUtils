// import ReactDOM from "react-dom/client";

import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// imrs

import {
  BrowserRouter as Router,
  Routes, Route 
  
  
} from 'react-router-dom'
import TextForm from './components/TextForm';




function App() {
  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(null);

  const showAlert = (mss,type) => {
    setAlert({
      "message":mss,
      "type":type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toogleMode = () =>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.background = "grey";
      showAlert("dark mode is enable","success");
    }else{
      setMode('light')
      document.body.style.background = "white";
      showAlert("light mode is enable","success");
    }
  }
  return (
    <>
      <Router>

      
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>

        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm header="Enter your text to analyze"  showAlert={showAlert} mode={mode} />}/>
            
         
          {/* <Route path="/">
            <TextForm header="Enter your text to analyze"  showAlert={showAlert} mode={mode} />
          </Route> */}


        </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
