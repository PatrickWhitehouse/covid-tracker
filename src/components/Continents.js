import React, { useEffect, useState } from 'react';
import { getContinentData } from '../api';
import { Pie } from 'react-chartjs-2';

const Continents = () => {
    const [continentList, setList] = useState([]);
    useEffect(() => {
        const myData = async () => {
            const res = await getContinentData();
            setList(res);
        };
        myData();
    }, []);
    const pieData = {
        labels: continentList.map((continent) => continent.continent),
        datasets: [
            {
                backgroundColor: [
                    '#368187',
                    '#eab46d',
                    '#69c3ce',
                    '#9ad2c1',
                    '#c92c48',
                    '#271845'
                ],
                hoverBackgroundColor: [
                    '#368187',
                    '#eab46d',
                    '#69c3ce',
                    '#9ad2c1',
                    '#c92c48',
                    '#271845'
                ],
                borderColor: '#000',
                borderWidth: 1,
                data: continentList.map((continent) => continent.cases)
            }
        ]
    }
    return (
        <>
            <h2>Data for each continent</h2>
            <p>Below is a chart which outlines the number of cases per continent.</p>
            <div className="bg-white py-6">
                <Pie data={pieData}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true
                    }} />
            </div>
        </>
    )
}

export default Continents;