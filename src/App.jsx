import { useEffect, useState, createContext } from "react";
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";


export const AppContext = createContext();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
