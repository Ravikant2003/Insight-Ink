import React, {useEffect} from "react";
import GlobalStyles from 'styles/GlobalStyles';

 
import MainLandingPage from "pages/home.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "pages/dashboard.js";



export default function App() {
  useEffect(() => {
    document.title = "Insight Ink";
  }, []);

  return (
    //
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
