import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ items }) {
  const CrossbodyCategoryArr = items.filter(function (item) {
    return item.department.departmentName === "HANDBAGS - CROSSBODY BAGS";
  });

  const LogoCategoryArr = items.filter(function (item) {
    return item.department.departmentName === "LOGO BAGS";
  });

  const PartywearCategoryArr = items.filter(function (item) {
    return (
      item.department.departmentName === "Partywear - Rhinestones" ||
      item.department.departmentName === "Partywear - Rhinestones"
    );
  });

  const BackpacksCategoryArr = items.filter(function (item) {
    return (
      item.department.departmentName === "Belt Bags & Backpacks" ||
      item.department.departmentName === "BELT BAGS & BACKPACKS"
    );
  });

  const ClutchesCategoryArr = items.filter(function (item) {
    return (
      item.department.departmentName === "Clutches & Mini Bags" ||
      item.department.departmentName === "CLUTCHES & MINI BAGS"
    );
  });

  const ShoulderCategoryArr = items.filter(function (item) {
    return (
      item.department.departmentName === "Shoulder Bags" ||
      item.department.departmentName === "SHOULDER BAGS"
    );
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Products category chart",
      },
    },
  };

  //
  const data = {
    labels: [
      "CROSSBODY BAGS",
      "LOGO BAGS",
      "PARTYWEAR",
      "BACKPACKS",
      "CLUTCHES",
      "SHOULDER",
    ],
    datasets: [
      {
        label: "Departments pie",
        data: [
          CrossbodyCategoryArr.length,
          LogoCategoryArr.length,
          PartywearCategoryArr.length,
          BackpacksCategoryArr.length,
          ClutchesCategoryArr.length,
          ShoulderCategoryArr.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}
