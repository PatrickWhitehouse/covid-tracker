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
        <section className="my-5 inline-block w-full lg:w-1/2">
            <h2>Data for each continent</h2>
            <div className="bg-white py-6">
                <Pie data={pieData}
                    width={450}
                    height={400}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true
                    }} />
            </div>
        </section>
    )
}

export default Continents;