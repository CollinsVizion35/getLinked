import { useEffect, useState, createContext } from "react";
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { DeadlineContextPage } from "./contexts/deadlineContext";
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";
import { AppContextPage } from "./contexts/AppContext";
import Start from "./pages/3dEffect/start";

export const AppContext = createContext();

function App() {
  return (
    <div>
      <AppContextPage>
        <DeadlineContextPage>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/home" element={<Home />} />

            <Route path="/contact_us" element={<Contact />} />

            <Route path="/register" element={<Register />} />
          </Routes>
        </DeadlineContextPage>
      </AppContextPage>
    </div>
  );
}

export default App;
