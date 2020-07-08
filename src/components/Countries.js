import React, { useState, useEffect } from 'react';
import Axios from "axios";
import CountUp from 'react-countup';


const Countries = () => {

    const [countryList, setList] = useState([]);
    const [searchValue, setSearch] = useState('');
    const [limit, setLimit] = useState(6);
    const [disabledButton, setDisabledButton] = useState(false);
    const [count, setCount] = useState(false)

    useEffect(() => {
        const myData = async () => {
            const { data } = await Axios.get('https://disease.sh/v3/covid-19/countries');
            setList(data);
        };
        myData();
    }, []);
    return (
        <section className="my-5">
            <h2 className="text-3xl">Individual Country Data</h2>
            <p>Below is each country with their current cases, deaths and also recoveries.</p>

            {disabledButton ? <><p>Use the input field to filter down to your desired country once <span className="font-semibold">all</span> countries have been loaded.</p> <input type="text" className="my-3 block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search for a country..." onChange={e => {
                setSearch(e.target.value)
            }} /></> : ''}

            <div className="flex flex-wrap justify-center sm:justify-between my-6">
                {countryList.length > 0 ?
                    countryList.slice(0, limit).filter(({ country }) => country.toLowerCase().includes(searchValue.toLowerCase())).map(({ country, active, deaths, recovered, countryInfo: { flag } }) => (

                        <div key={country} className="flex flex-col w-full mb-6 max-w-sm rounded overflow-hidden shadow-lg bg-white text-gray-900 sm:w-5/12 xl:w-1/3">
                            <img className="w-full mb-auto" src={flag} alt={country} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{country}</div>
                                <p className="text-base">
                                    <span className="block text-blue-800">Current active cases:  {count === true ? active : <CountUp end={active} />}</span>
                                    <span className="block text-red-800">Current death count:  {count === true ? deaths : <CountUp end={deaths} />}</span>
                                    <span className="block text-green-800 font-semibold">Recovered:  {count === true ? recovered : <CountUp end={recovered} onEnd={() => setCount(true)} />}</span>
                                </p>
                            </div>
                        </div>
                    ))
                    : 'Fetching data...'}
            </div>
            <button className={`w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${disabledButton ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={e => {
                setLimit(countryList.length);
                setDisabledButton(!disabledButton);
            }} disabled={disabledButton}>
                {limit < countryList.length ? 'Load all countries...' : 'All countries loaded'}
            </button>
        </section>
    )
}

export default Countries;