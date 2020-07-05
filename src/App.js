import React, { useState, useEffect } from "react";
import { callApi } from "./api";
import styles from "./App.module.css";
import Cards from "./components/Cards";

function App() {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    const myData = async () => {
      const data = await callApi();
      setDeaths(data.deaths.value);
      setRecovered(data.recovered.value);
      setConfirmed(data.confirmed.value);
    };
    myData();
  });

  return (
    <div className={styles.container}>
      <h1>Covid 19 tracker.</h1>
      <h2>Confirmed cases are {confirmed}</h2>
      <h2>Confirmed recovered are {recovered}</h2>
      <h2>Confirmed deaths are {deaths}</h2>
      <Cards />
    </div>
  );
}

export default App;
