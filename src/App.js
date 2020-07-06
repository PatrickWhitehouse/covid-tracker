import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Global from './components/Global';
import Countries from './components/Countries';

function App() {


  return (
    <div className={styles.container}>
      <h1>Covid 19 tracker.</h1>
      <Global />
      <Countries />
    </div>
  );
}

export default App;
