import React from "react";
import Global from './components/Global';
import Countries from './components/Countries';

function App() {


  return (
    <div className="container">
      <h1>Covid 19 tracker</h1>
      <p>This tracker uses the data from the following API - https://disease.sh/v3/covid-19/. This means that the data used may not be 100% accurate.</p>
      <Global />
      <Countries />
    </div>
  );
}

export default App;
