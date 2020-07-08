import React from "react";
import Global from './components/Global';
import Countries from './components/Countries';
import Continents from './components/Continents';

function App() {


  return (
    <div>
      <h1 className="text-5xl">COVID-19 Global Statistics</h1>
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
        <p>This tracker uses the data from the following API - https://disease.sh/v3/covid-19/. This means that the data displayed may not be 100% accurate.</p>
      </div>
      <div className="my-6">
        <h2 className="text-3xl">Global data</h2>
        <p>Below are a couple of charts which outline cases vs deaths for each individual continent and the world as a whole.</p>
        <Global />
        <Continents />
      </div>
      <Countries />
    </div>
  );
}

export default App;
