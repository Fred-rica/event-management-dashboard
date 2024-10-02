"use client";
import React, { useEffect, useState } from "react";
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
import { useAppContext } from "@/app/context/AppContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const EventBarChart = () => {
  const [labels, setLabels] = useState([]);
  const { theme } = useAppContext();

  // Function to determine if the screen is small
  const isSmallScreen = () => window.innerWidth < 600;

  // Function to get labels based on screen size
  const getLabels = () => {
    const monthNames = Object.keys(eventData);
    return isSmallScreen()
      ? monthNames.map((month) => month.slice(0, 2))
      : monthNames;
  };

  useEffect(() => {
    setLabels(getLabels());
    // Update labels on resize
    const handleResize = () => {
      setLabels(getLabels());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        data: Object.values(eventData),
        backgroundColor: "#8576FF",
        borderRadius: 1,
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
          stepSize: 200,
          padding: 15,
          color: theme === "light" ? "#64748B" : "white", // Conditional color based on theme
        },
        grid: {
          drawBorder: false,
          drawOnChartArea: true,
          drawTicks: false,
          color: theme === "light" ? "#e2e7f1" : "#64748B",
          left: false,
          lineWidth: 1.5,
        },
        border: {
          dash: [6, 2],
        },
      },
      x: {
        ticks: {
          padding: 15,
          color: theme === "light" ? "#64748B" : "white",
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawBorder: false,
          drawTicks: false,
          color: theme === "light" ? "#e2e7f1" : "#64748B",
          lineWidth: 1.5,
          width: 0,
        },
        border: {
          dash: [6, 2],
          width: 0,
        },
      },
    },
  };

  return (
    <section className="w-full lg:w-1/2 border border-[#F2F2F7] dark:border-primaryDark bg-inherit dark:bg-primaryDark ">
      <div className="w-full h-[260px] lg:h-full p-0 lg:p-5 rounded-sm">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default EventBarChart;
