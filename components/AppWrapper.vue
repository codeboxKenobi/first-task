<template>
    <div class="app-wrapper">
        <div class="line-chart">
            <p>Сравнение ТСО </p>
            <line-chart :data="lineChartData" :options="lineChartOptions" style="width: 100%; height: 300px" />
        </div>
        <div class="bar-chart">
            <p>Сравнение наработки </p>
            <bar-chart :data="barChartData" :options="lineChartOptions" style="width: 100%; height: 300px" />
        </div>
    </div>
</template>

<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
    export default {
  components: { 
      LineChart,
      BarChart
      },
        data() {
            return {
                lineChartData: {
                    labels: [
                        "Валок 1",
                        "Валок 2",
                        "Валок 3",
                        "Валок 4",
                        "Валок 5",
                    ],
                    datasets: [
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [1, 3, 5, 3, 5],
                            backgroundColor: "transparent",
                            borderColor: "rgba(83, 74, 190, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [2, 4, 4, 2, 4],
                            backgroundColor: "transparent",
                            borderColor: "rgba(232, 230, 45, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [3, 5, 3, 3, 3],
                            backgroundColor: "transparent",
                            borderColor: "rgba(64, 146, 181, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [4, 1, 2, 2, 2],
                            backgroundColor: "transparent",
                            borderColor: "rgba(94, 207, 150, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [5, 2, 1, 3, 1],
                            backgroundColor: "transparent",
                            borderColor: "rgba(245, 40, 145, 1)",
                            borderWidth: 2,
                        },
                    ],
                },
                barChartData: {
                    labels: [
                        "Типоразмер 1",
                        "Типоразмер 2",
                        "Типоразмер 3",
                        "Типоразмер 4",
                    ],
                    datasets: [
                        {
                            label: "bar 1",
                            lineTension: 0,
                            data: [
                                [0, 2.8],
                                [0, 2.8],
                                [0, 2.8],
                                [0, 2.8],
                                [0, 2.8],
                            ],

                            backgroundColor: "rgba(83, 74, 190, 1)",
                            borderColor: "rgba(83, 74, 190, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "bar 2",
                            lineTension: 0,
                            data: [
                                [0, 3.8], 
                                [0, 3.8],
                                [0, 3.8],
                                [0, 3.8],
                                [0, 3.8],
                            ],

                            backgroundColor: "rgba(232, 230, 45, 1)",
                            borderColor: "rgba(232, 230, 45, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "bar 3",
                            lineTension: 0,
                            data: [
                                [0, 3.2],
                                [0, 3.2],
                                [0, 3.2],
                                [0, 3.2],
                                [0, 3.2],
                            ],

                            backgroundColor: "rgba(64, 146, 181, 1)",
                            borderColor: "rgba(64, 146, 181, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "bar 4",
                            lineTension: 0,
                            data: [
                                [0, 4.3],
                                [0, 4.3],
                                [0, 4.3],
                                [0, 4.3],
                                [0, 4.3],
                            ],

                            backgroundColor: "rgba(94, 207, 150, 1)",
                            borderColor: "rgba(94, 207, 150, 1)",
                            borderWidth: 1,
                        },
                        {
                            label: "bar 5",
                            lineTension: 0,
                            data: [
                                [0, 3.6],
                                [0, 3.6],
                                [0, 3.6],
                                [0, 3.6],
                             
                            ],

                            backgroundColor: "rgba(245, 40, 145, 1)",
                            borderColor: "rgba(245, 40, 145, 1)",
                            borderWidth: 1,
                        },
                    ],
                },

                lineChartOptions: {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: "",
                        fontSize: 24,
                        fontColor: "#6b7280",
                    },
                    tooltips: {
                        backgroundColor: "#17BF62",
                    },
                    scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    max: 6,
                                    min: 0,
                                    stepSize: 1,
                                },
                                gridLines: {
                                    display: true,
                                },
                            },
                        ],
                    },
                },
            }
        },
    }

</script>

<style lang="css" scoped>

p {
    margin-left: 5px;
    margin-bottom: -20px;
    color: grey;
}
.app-wrapper {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.line-chart {
    height: 300px;
    width: 48%;
}
.bar-chart {
    height: 300px;
    width: 48%;
}
</style>