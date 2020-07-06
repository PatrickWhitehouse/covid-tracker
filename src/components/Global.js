import React, { useEffect, useState } from 'react';
import { getGlobalData } from '../api';
import { Bar } from 'react-chartjs-2';

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
    const barData = {
        labels: ['Cases', 'Deaths'],
        datasets: [
            {
                label: 'Covid Cases vs Deaths',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [globData.cases, globData.deaths]
            }
        ]
    };
    return (
        <section className="my-5">
            <h2 className="text-3xl">Global data</h2>
            <p>Here are the current global cases vs deaths.</p>
            <p>Cases: {globData.cases}</p>
            <p>Deaths: {globData.deaths}</p>
            <div style={{ maxWidth: '450px' }}>
                <Bar data={barData}
                    width={450}
                    height={400}
                    options={{
                        maintainAspectRatio: true,
                        responsive: true
                    }}
                />
            </div>
        </section>
    )
}

export default Global;