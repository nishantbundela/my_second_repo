import * as React from 'react';
import Chart from 'react-apexcharts';

const fillerData = [
    {
        name: 'Submitted Hours',
        data: [0, 243, 254, 286, 275, 269]
    }
];
const options = {
    xaxis: {
        categories: ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Period 5', 'Period 6']
    },
    stroke: {
        curve: 'smooth'
    }
};

export default function AdminCumulativeHours() {

    return(
        
        <Chart type = 'line' series = {fillerData} options = {options} height = '70%'/>
        
    );
}