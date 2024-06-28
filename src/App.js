import logo from './logo.svg';
import './App.css';
import MyNavBar from './Components/MyNavBar/MyNavBar.js'
import Home from './Components/Home/Home';
import Info from './Components/Info/Info.js';
import Contact from './Components/Contact/Contact.js';
import { useState, useEffect } from 'react';
import LanguageContext from './languageContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [lang, setLang] = useState("ENG")

  useEffect(function getLang(){
    if (localStorage.getItem("lang")){
      console.log(localStorage.getItem("lang"))
        setLang(localStorage.getItem("lang"))
    }
  },[])
  
  const changeLang = (l) => {
   localStorage.setItem("lang", l)
    setLang(l)
  }


  return (
    <div className="App">
        <LanguageContext.Provider value={lang}>
                <BrowserRouter>
                  <MyNavBar changeLang = {changeLang}></MyNavBar>
                    <Routes>
                      <Route exact path="/" element={<Home></Home>}></Route>
                      <Route exact path="/info" element={<Info></Info>}></Route>
                      <Route exact path="/contact" element={<Contact></Contact>}></Route>
                    </Routes>
                </BrowserRouter>
        </LanguageContext.Provider>
    </div>
  );
}

export default App;
