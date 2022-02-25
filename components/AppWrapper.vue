<template>
    <div class="app-wrapper">
        <div class="line-chart">
            <p>Сравнение ТСО </p>
            <line-chart v-if="lineLoad" :data="lineChartData" :options="lineChartOptions" style="width: 100%; height: 300px" />
        </div>
        <div class="bar-chart">
            <p>Сравнение наработки </p>
            <bar-chart v-if="barLoad" :data="barChartData" :options="lineChartOptions" style="width: 100%; height: 300px" />
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
                lineLoad: false,
                barLoad: false,

                lineData: [],
                allLineData: [],

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
                            data: [],
                            backgroundColor: "transparent",
                            borderColor: "rgba(83, 74, 190, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [],
                            backgroundColor: "transparent",
                            borderColor: "rgba(232, 230, 45, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [],
                            backgroundColor: "transparent",
                            borderColor: "rgba(64, 146, 181, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [],
                            backgroundColor: "transparent",
                            borderColor: "rgba(94, 207, 150, 1)",
                            borderWidth: 2,
                        },
                        {
                            label: "Visualizaciones",
                            lineTension: 0,
                            data: [],
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
        methods: {
            getRandomData() {
                let min = Math.floor(1)
                let max = Math.floor(6) 

                for (let i = 0; i < 5; i++) {
                    this.lineData.push(Math.floor(Math.random() * (max - min) + min)) 
                }

                return this.lineData
            },
            separateData(arr) {
                const size = 5
                const subarray = []
                for (let i = 0; i < Math.ceil(arr.length/size); i++){
                    subarray[i] = arr.slice((i*size), (i*size) + size)
                }
                this.allLineData = subarray
                
            }
        },
        mounted() {
            for (let x = 0; x < 5; x++) {
                this.getRandomData()
            }

            this.separateData(this.lineData)

            for (let i = 0; i < 5; i++)
                this.lineChartData.datasets[i].data = this.allLineData[i]
                this.lineLoad = true

            for (let y = 0; y < 5; y++)
            this.barChartData.datasets[y].data = this.allLineData[y]
            this.barLoad = true
        }   
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