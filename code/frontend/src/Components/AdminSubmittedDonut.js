import * as React from 'react';
import Chart from 'react-apexcharts';

const fillerData = [90];
const options = {
    labels: ['Submitted']
}

export default function AdminSubmittedDonut() {

    //const labels = ['Submitted', 'Not Submitted', 'Rejected']

    return(
        
        <Chart type = 'radialBar' series = {fillerData} options = {options}/>
        
    );
}