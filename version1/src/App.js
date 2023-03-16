import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/pages/Layout"
import Login from "@/pages/Login";
import Game from "@/pages/Game";
import About from "@/pages/About";
import Chat from "@/pages/Chat";
import SelfCenter from "@/pages/SelfCenter";


import {Button}  from "antd";
import Home from "@/pages/Home";



function App(){
  return (
      <BrowserRouter>
          <div className="App">
          <Routes>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/" element={<Layout/>}></Route>
              <Route path="/home" element={<Home/>}></Route>
              <Route path="/game" element={<Game/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/selfcenter" element={<SelfCenter/>}></Route>
          </Routes>
          </div>
      </BrowserRouter>

  );
}


export default App;
