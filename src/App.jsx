import { useEffect, useState, createContext } from "react";
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { DeadlineContextPage } from "./contexts/deadlineContext";
import Contact from "./pages/contact/contact";
import Register from "./pages/register/register";


export const AppContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <DeadlineContextPage>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />

          <Route
            path="/contact_us"
            element={
              <Contact />
            }
          />

          <Route
            path="/register"
            element={
              <Register />
            }
          />
        </Routes>
      </DeadlineContextPage>
    </div>
  );
}

export default App;
