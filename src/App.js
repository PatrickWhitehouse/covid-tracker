import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    async function getData() {
      const res = await Axios.get("https://covid19.mathdro.id/api");
      setDeaths(res.data.confirmed.value);
    }
    getData();
  });

  return (
    <div className="App">
      <h1>Covid 19 tracker.</h1>
      <h2>Current deaths are {deaths}</h2>
    </div>
  );
}

export default App;
