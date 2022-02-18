import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'
import './coinChart.css'

const CoinChart = () => {
    const chartRef = useRef()
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'My First Dataset',
                        data: [
                            { x: 1, y: 15 },
                            { x: 2, y: 12 },
                            { x: 3, y: 24 }
                        ],
                        backgroundColor: "rgba(174, 305, 194, 0.5)",
                        borderColor: "rgba(174, 305, 194, 0.4",
                        pointRadius: 0,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            })
            console.log(chartInstance)
        }
    }, [])
    return (
        <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
    )
}

export default CoinChart