import React, { useState, useEffect } from "react";
import { dailyData } from "../api";
function Chart() {
  const [covidDaily, setDaily] = useState({});

  useEffect(() => {
    const getDailyData = async () => {
      setDaily(await dailyData());
    };
    getDailyData();
  }, []);

  return (
    <>
      <h1>Mainland China</h1>
      <h2>Start: {covidDaily[0] ? covidDaily[0].mainlandChina : 0}</h2>
    </>
  );
}

export default Chart;
