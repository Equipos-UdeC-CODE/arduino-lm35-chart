const socket = io();



const temperatureDisplay = document.getElementById('temperature');

let contador = 0;

socket.on('temp', function(datosSeriales) {

    console.log(datosSeriales);



    temperature.innerHTML = `${datosSeriales}°C ${contador}`;

    myChart.data.labels.push(contador);

    myChart.data.datasets.forEach(element => {

        element.data.push(datosSeriales);

    });

    contador++;

    if (contador == 100)

    {

        contador = 0;

        myChart.data = {

            labels: ['Serial'],

            datasets: [{

                label: 'Serial',

                backgroundColor: 'rgba(255, 99, 132, 0.2)',

                borderColor: 'rgba(255, 99, 132, 1)',

                data: []

            }]

        }





    }

    myChart.update();

});

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {

    type: 'line',

    data: {

        labels: ['Serial'],

        datasets: [{

            label: 'Serial',

            backgroundColor: 'rgba(255, 99, 132, 0.2)',

            borderColor: 'rgba(255, 255, 255, 1)',

            data: []

        }]

    },

    options: {}

});