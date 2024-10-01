'use client'
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { eventData } from "@/hooks/eventChartData";

// Register the components needed for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EventBarChart = () => {
  const data = {
    labels: Object.keys(eventData), 
    datasets: [
      {
        data: Object.values(eventData), 
        backgroundColor: "#8576FF", 
        barThickness: 25.66,
        borderRadius: 1
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200, // Display labels in increments of 200
          padding: 15, // Add more space between y-axis labels and the chart
        },
        grid: {
          drawBorder: false, // Do not draw border around the chart
          drawOnChartArea: true, // Draw gridlines on the chart area
          drawTicks: false, // Optional: Remove small ticks at the edges
          color: "rgba(200, 200, 200, 0.5)", // Color of the gridlines
          lineWidth: 1.5,
        },
        border: {
          dash: [6, 2],
          color: "rgba(200, 200, 200, 0.5)",
        },
      },
      x: {
        ticks: {
          padding: 15, // Add more space between x-axis labels and the chart
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawBorder: false,
          drawTicks: false,
          color: "rgba(200, 200, 200, 0.5)",
          lineWidth: 1.5,
          width: 0,
        },
        border: {
          dash: [6, 2],
          color: "rgba(200, 200, 200, 0.5)",
          width: 0,
        },
      },
    },
  };

  return (
    <section className="w-full lg:w-1/2 border border-[#F2F2F7]">
      <div className="w-full h-[400px] lg:h-full p-0 lg:p-5 rounded-sm">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default EventBarChart;
