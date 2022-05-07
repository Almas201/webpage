labelx = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const cty = document.getElementById('chart').getContext('2d');
const myChart = new Chart(cty, {
    type: 'line',
    data: {
        labels: labelx,
        datasets: [{
            label: 'текущий год',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        },
        ]
    },
    options: {
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        hoverRadius: 12,
        hoverBackgroundColor: 'yellow',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        plugins: {
            title: {
                display: true,
                text: 'Спрос за год',
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
});


function normal() {
    var sigma = document.getElementById('idAA').value;
    var mx = document.getElementById('idBB').value;
    alert("Вы ввели a = " + sigma + " " + " и b = " + mx);
    // if (sigma[0] == '0' || mx[0] == '0') {
    //     alert("Ошибка! Вы не можете ввести числа с лидирующими нулями!");
    //     window.location.reload();
    // } else {
    //     for (i = 0; i < sigma.length; i += 1) {
    //         if ((sigma[i] >= '0' && sigma[i] <= '9') || (mx[i] >= '0' && mx[i] <= '9')) {
    //             continue;
    //         } else {
    //             alert("Error! You should input only numbers!");
    //             window.location.reload();
    //             return;
    //         }
    //     }
    // }
    sigma = parseInt(sigma);
    mx = parseInt(mx);
    var j = 1;
    month = 12;
    x = []
    while (j <= month) {
        var z2j = Math.random();
        var z2jminus1 = Math.random();
        var V1 = 2*z2jminus1;
        var V2 = 2*z2jminus1;
        var S = V1*V1 + V2*V2;
        if(S <= 1.0){
            x.push(parseInt(mx + sigma*V1*Math.sqrt((-2*Math.log(S))/S)));
        }else{
            while(true){
                if(S <= 1.0){
                    x.push(parseInt(mx + sigma*V1*Math.sqrt((-2*Math.log(S))/S)));
                    break;
                }else {
                    z2j = Math.random();
                    z2jminus1 = Math.random();
                    V1 = 2 * z2jminus1;
                    V2 = 2 * z2jminus1;
                    S = V1 * V1 + V2 * V2;
                }
            }
        }
        j += 1;
    }

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('normal-body').appendChild(table);
    let row1 = document.createElement('tr');
    let heading1 = document.createElement('th');
    heading1.innerHTML = "Месяц";
    let heading2 = document.createElement('th');
    heading2.innerHTML = 'Текущий год';
    row1.appendChild(heading1);
    row1.appendChild(heading2);
    thead.appendChild(row1);
    for(i = 1; i <= 12; i += 1){
        let row = document.createElement('tr');
        let head1 = document.createElement('th');
        head1.innerHTML = labelx[i - 1];
        let head2 = document.createElement('th');
        head2.innerHTML = x[i - 1];
        row.appendChild(head1);
        row.appendChild(head2);
        tbody.appendChild(row);
    }
    myChart.data.datasets[0].data = x;
    myChart.update();
}




























