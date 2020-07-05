import React, { useState, useEffect } from "react";
import { dailyData } from "../api";
function Chart() {
  const [covidDaily, setDaily] = useState([]);

  useEffect(() => {
    const getDailyData = async () => {
      setDaily(await dailyData());
    };
    getDailyData();
  }, []);

  console.log(covidDaily);

  return <h1>Chartjs</h1>;
}

export default Chart;
