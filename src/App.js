import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  useEffect(() => {
    async function getData() {
      const res = await Axios.get("https://covid19.mathdro.id/api");
      console.log(res);
    }
    getData();
  });
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
