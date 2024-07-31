import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateANewUser from './Component/Authonication Page/CreateANewUser.js';
import Login from "./Component/Authonication Page/Login.js";
import HomePage from "./Component/Main Page/Home.js";
import NavbarComponent from './Component/Navbar/NavbarComponent.js'
import AddAddress from "./Component/Address Entry Page/AddAddress.js";
import EditInformation from "./Component/Main Page/EditInformation.js";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent/>
        <Routes>
          <Route exact path="/" element={<CreateANewUser />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route exact path="/address" element={<AddAddress />}></Route>
          <Route exact path="/editImformation" element={<EditInformation />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
