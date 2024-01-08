"use client"
import { useRef, useEffect } from 'react';
import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

interface DoughnutChartProps {
    percentages: number[];
    labels?: string[];
    showPercentage?: boolean;
}

//By default, the chart will have two labels: Wins and Losses
export default function DoughnutChart({percentages, labels=["Wins", "Losses"], showPercentage=true}: DoughnutChartProps) {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const context = chartRef.current.getContext('2d');

            const config: ChartConfiguration<keyof ChartTypeRegistry, number[], string> = {
                type: 'doughnut' as keyof ChartTypeRegistry,
                data: {
                    labels: labels,
                    datasets: [{
                        data: percentages,
                        backgroundColor: [
                            '#FF5931',
                            '#E3E3E3'
                        ],
                        borderWidth: 5,
                        borderColor: '#E3E3E3',

                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                },
                //ads a percentage label to the center of the chart
                plugins: (showPercentage && percentages.length === 2) ? [{
                    id: 'custom_percentage_label',
                    beforeDraw: (chart) => {
                        const width = chart.width,
                            height = chart.height,
                            ctx = chart.ctx,
                            percent = Math.round((percentages[0] / (percentages[0] + percentages[1])) * 100);

                        ctx.restore();
                        const fontSize = (height / 114).toFixed(2);
                        ctx.font = `${fontSize}em sans-serif`;
                        ctx.textBaseline = "middle";
                        ctx.fillStyle = "#FF5931";

                        const text = `${percent}%`,
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;

                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                }] : []
            };

            if (context) {
                chartInstance.current = new Chart(context, config);
            }
        }
    }, [percentages, labels, showPercentage]); 

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}