import React from "react";
import Chart from "react-google-charts";


export default function GeoChart({items}) {
    
  const setup =  ["Country", "Popularity"]
  const population = [
    {0: 9614 },
    {1: 265},
    {2: 14737},
    {3: 1267145},
    {4: 560},
    {5: 19123},
    {6: 7291600},
    {7: 147182123}
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Store Popularity by country",
      },
    },
  };
  
  const data = [[...setup],...items?.slice(0,7).map((obj,i )=> [obj=obj.country.country, population[i][i]])];
  return <Chart chartType="GeoChart"  options={options} data={data} />
};