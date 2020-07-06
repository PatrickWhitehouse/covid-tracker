import React, { useEffect, useState } from 'react';
import { getGlobalData } from '../api';

const Global = () => {
    const [globData, setData] = useState([]);
    useEffect(() => {
        const globalData = async () => {
            const { cases, deaths } = await getGlobalData();
            const data = { cases, deaths }
            setData(data);
        };
        globalData();
    }, []);
    return (
        <>
            <h2>Global data</h2>
            <p>Here are the global cases vs deaths.</p>
            <p>Cases: {globData.cases}</p>
            <p>Deaths: {globData.deaths}</p>
        </>
    )
}

export default Global;