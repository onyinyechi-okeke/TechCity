// src/MyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './Graph.css'

// Register necessary chart.js components and the annotation plugin
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const GraphTCA = () => {
    const data = {
        labels: ['1 year', '5 years', '10 years', '15 years', '20 years'],
        datasets: [
            {
                label: 'Total $TCA token',
                data: [0, 0.1, 0.2, 0.3, 0.4],
                borderColor: '#eea837',
                backgroundColor: '#eea837',
                pointBackgroundColor: '#eea837',
                pointBorderColor: '#eea837',
                pointRadius: (context) => (context.dataIndex === 4 ? '5' : '0'),
                fill: false,
            },
            {
                label: 'Returns',
                data: [0.1, 0.3, 0.5, 0.7, 0.9],
                borderColor: 'green',
                backgroundColor: 'green',
                pointBackgroundColor: 'green',
                pointBorderColor: 'green',
                pointRadius: (context) => (context.dataIndex === 4 ? '5' : '0'),
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow the graph to fill the container
        scales: {
            y: {
                display: true,
                min: 0,
                max: 9,
                grid: {
                    drawBorder: false,
                    display: true, // Display horizontal grid lines
                    color: 'rgb(88, 87, 87)', // Color of the grid lines
                },
                ticks: {
                    display: false,
                    stepSize: 1.8, // Ensure four horizontal lines
                },
                border: {
                    display: false, // Hide the axis line itself
                },
            },
            x: {
                grid: {
                    drawBorder: true,
                    display: false, // Ensure no vertical grid lines are drawn
                },
            },
        },
        plugins: {
            legend: {
                display: true, // Ensure legend is displayed
                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: 'white',
                    font: {
                        size: 14, 
                    }
                },
            },
        },
    };

    return (
        <main className='Tcagraph-container'>
            <Line data={data} options={options} />
        </main>
    );
};

export default GraphTCA;
