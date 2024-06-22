// src/MyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import './Graph.css'

// Register necessary chart.js components and the annotation plugin
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Graph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Units Sold',
                data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
                borderColor: 'yellow',
                backgroundColor: 'yellow',
                pointBackgroundColor: 'yellow',
                pointBorderColor: 'yellow',
                pointRadius: (context) => (context.dataIndex === 7 ? '5' : '0'),
                fill: false,
            },
            {
                label: 'Shares sold',
                data: [0.1, 0.3, 0.5, 0.7, 0.9, 1, 1.2, 1.4],
                borderColor: 'green',
                backgroundColor: 'green',
                pointBackgroundColor: 'green',
                pointBorderColor: 'green',
                pointRadius: (context) => (context.dataIndex === 7 ? '5' : '0'),
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
                    stepSize: 2, // Ensure four horizontal lines
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
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: 'white',
                    font: {
                        size: 10, 
                    },
                },
            },
        },
    };

    return (
        <main className='graph-container'>
            <p>Total sales</p>
            <h5>$0.00</h5>
            <div className='graph'>
            <Line data={data} options={options} />
            </div>
        </main>
    );
};

export default Graph;
