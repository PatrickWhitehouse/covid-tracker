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
            <div className="flex flex-wrap justify-between my-6">
                {countryList.length > 0 ?
                    countryList.filter(({ country }) => country.toLowerCase().includes(searchValue.toLowerCase())).map(({ country, active, deaths, countryInfo: { flag } }) => (

                        <div key={country} className="flex flex-col w-1/3 mb-6 max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900">
                            <img className="w-full mb-auto" src={flag} alt={country} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{country}</div>
                                <p className="text-base">
                                    <span className="block">Current active cases: {active}</span>
                                    <span className="block">Current death count: {deaths}</span>
                                </p>
                            </div>
                        </div>
                    ))
                    : 'Fetching data...'}
            </div>
        </>
    )
}

export default Countries;