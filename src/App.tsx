import React from "react";
import "./frontend/styles/App.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./frontend/MainPage";
import WebRoutes from "./frontend/website/WebRoutes";
import PlRoutes from "./frontend/platform/PlRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <WebRoutes />
        <PlRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
