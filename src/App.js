import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddUserEdit from "./pages/AddUserEdit";
import Userinfo from "./pages/Userinfo";
import Header from "./component/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer/>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/addUser' element={<AddUserEdit/>}/>
        <Route path='/editUser/:id' element={<AddUserEdit/>}/>
        <Route path='/userInfo/:id' element={<Userinfo/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
