import React from 'react';
import './App.css';
import * as pages from "./pages"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
