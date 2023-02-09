import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function OrderPerDayChart({ items }) {

let sum = 0
const SumPerObj =[...items.map(obj => obj.product.map(item => sum += item.price))]

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "number of orders per day",
      },
    },
  };
  const labels = [...items.map(item => new Date(`${item.orderInfo.purchaserInfo.date}`).toLocaleDateString())];
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: SumPerObj.map(item => item.reduce((a,b)=> a+b,0)),
        backgroundColor: "#9ff0ed",
      },
      {
        label: "Avg of purchases per day",
        data: SumPerObj.map(item => item.reduce((a,b)=> a+b,0) / item.length),
            backgroundColor: "#cfe2ff"
        },
    ]
};
return <Bar options={options} data={data} />;
};