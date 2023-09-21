import { useEffect, useState, createContext } from "react";
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { DeadlineContextPage } from "./contexts/deadlineContext";


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
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </DeadlineContextPage>
    </div>
  );
}

export default App;
