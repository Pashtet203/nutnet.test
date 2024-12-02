import React from 'react';
import './App.css';
import * as pages from "./pages"
import {Route, Routes} from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
        <Header/>
      <div className="container">
        <Routes>
          <Route element={<pages.NotFoundPage/>} path={"*"}/>
          <Route element={<pages.HomePage/>} path={"/"}/>
          <Route path={"city"}>
              <Route element={<pages.CityPage/>} path={":coordinate"}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
