import Chart from 'chart.js/auto';

const data = {

labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],

datasets: [{

label: 'Temperature',

data: [12, 14, 16, 18, 20, 22, 24],

fill: false,

borderColor: 'rgb(75, 192, 192)',

tension: 0.1

}]

};

const config = {

type: 'line',

data: data,

options: {}

};

const myChart = new Chart(

document.getElementById('myChart'),

config

);