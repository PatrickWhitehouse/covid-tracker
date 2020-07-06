import React, { useState, useEffect } from 'react';
import Axios from "axios";

const Countries = () => {

    const [countryList, setList] = useState([]);
    const [searchValue, setSearch] = useState('');
    useEffect(() => {
        const myData = async () => {
            const { data } = await Axios.get('https://disease.sh/v3/covid-19/countries');
            setList(data);
        };
        myData();
    }, []);

    return (
        <>
            <h2>Current country stats.</h2>
            <span>Filter country</span>
            <input type="text" placeholder="Search for a country..." onChange={e => {
                setSearch(e.target.value)
            }} />
            {countryList.length > 0 ?
                countryList.filter(({ country }) => country.toLowerCase().includes(searchValue.toLowerCase())).map(({ country, active, deaths, countryInfo: { flag } }) => (
                    <div key={country}>
                        <span>{country}</span>
                        <span>{active}</span>
                        <span>{deaths}</span>
                        <span><img src={flag} alt={country} /></span>
                    </div>
                ))
                : 'Fetching data...'}
        </>
    )
}

export default Countries;