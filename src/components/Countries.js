import React, { useState, useEffect } from 'react';
import Axios from "axios";

const Countries = () => {

    const [countryList, setList] = useState([]);
    useEffect(() => {
        const myData = async () => {
            const { data } = await Axios.get('https://disease.sh/v3/covid-19/countries');
            setList(data);
        };
        myData();
    }, []);


    console.log(countryList);
    return (
        <>
            <h2>Current country stats.</h2>
            {countryList.length > 0 ?
                countryList.map(({ country, active, deaths, countryInfo: { flag } }) => (
                    <div>
                        <span>{country}</span>
                        <span>{active}</span>
                        <span>{deaths}</span>
                        <span><img src={flag} alt="" /></span>
                    </div>
                ))
                : 'Fetching data...'}
        </>
    )
}

export default Countries;