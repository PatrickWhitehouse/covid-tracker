import React, { useState, useEffect } from "react";
import { callApi } from "./api";
import styles from "./App.module.css";
import Cards from "./components/Cards";

function App() {
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    async function getData() {
      await callApi();
    }
    getData();
  });

  return (
    <div className={styles.container}>
      <h1>Covid 19 tracker.</h1>
      <h2>Current deaths are {deaths}</h2>
      <Cards />
    </div>
  );
}

export default App;
