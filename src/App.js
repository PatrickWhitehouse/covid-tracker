import React, { useState, useEffect } from "react";
import { callApi } from "./api";
import styles from "./App.module.css";
import Cards from "./components/Cards";

function App() {
  const [covidData, setCovidData] = useState();

  useEffect(() => {
    const myData = async () => {
      const data = await callApi();
      setCovidData(data);
    };
    myData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Covid 19 tracker.</h1>
      <Cards data={covidData} />
    </div>
  );
}

export default App;
