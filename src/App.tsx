import React from 'react';
import './App.css';
import * as pages from "./pages"
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
        <Header/>
      <div className={"container"}>
        <Routes>
          <Route element={<pages.NotFoundPage/>} path={"*"}/>
          <Route element={<pages.HomePage/>} path={"/"}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
