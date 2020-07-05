import React, { useState, useEffect } from "react";
import { callApi } from "./api";
import styles from "./App.module.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";

function App() {
  const [covidData, setCovidData] = useState();

  useEffect(() => {
    const myData = async () => {
      setCovidData(await callApi());
    };
    myData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Covid 19 tracker.</h1>
      <Cards data={covidData} />
      <Chart />
    </div>
  );
}

export default App;
