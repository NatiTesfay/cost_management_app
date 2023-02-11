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

export default function OrderPerYearChart({ items }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "orders per year",
      },
    },
  };
  const FilteredByOrderCost = items?.filter(
    (item) => item.orderInfo.purchaseSum > 700
  );
  const labels = [ "2019", "2020", "2021", "2022", "2023"];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [
          ...FilteredByOrderCost.map((item) => item.orderInfo.purchaseSum),
        ],
        backgroundColor: "#cd2134",
      },
      {
        label: "Avg of items per year ",
        data: [
          ...FilteredByOrderCost.slice(0, 5).map(
            (item) => item.orderInfo.purchaserInfo.itemsNum
          ),
        ],
        backgroundColor: "#cfe2ff",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
