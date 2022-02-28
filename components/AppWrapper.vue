<template>
    <div class="app-wrapper">
        <div class="line-chart">
            <p>Сравнение ТСО </p>
            <line-chart v-if="lineLoad" :data="lineChartData" :options="ChartOptions" style="width: 100%; height: 300px" />
        </div>
        <div class="bar-chart">
            <p>Сравнение наработки </p>
            <bar-chart v-if="barLoad" :data="barChartData" :options="ChartOptions" style="width: 100%; height: 300px" />
        </div>
    </div>
</template>

<script>
import LineChart from './LineChart.vue'
import BarChart from './BarChart.vue'
import { lineLabels, lineColors, addLineItem } from './lineDataService.js'
import { barLabels, barColors, addBarItem } from './barDataService.js'

export default {
  components: { 
      LineChart,
      BarChart
      },
        data() {
            return {
                lineLoad: false,
                barLoad: false,

                barData: [],
                allBarData: [],
                barSeparateSize: addBarItem(),

                lineData: [],
                allLineData: [],
                lineSeparateSize: addLineItem(),

                lineChartData: {
                    labels: [],
                    datasets: [],
                },
                barChartData: {
                    labels: [],
                    datasets: [],
                },

                ChartOptions: {
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
                    this.barData.push(Math.floor(Math.random() * (max - min) + min))
                }

                return this.lineData
            },
            separateLineData(arr, size) {
                const subarray = []
                for (let i = 0; i < Math.ceil(arr.length / size); i++){
                    subarray[i] = arr.slice((i * size), (i * size) + size)
                }
                this.allLineData = subarray
            },
            separateBarData(arr, size) {
                const subarray = []
                for (let i = 0; i < Math.ceil(arr.length / size); i++){
                    subarray[i] = arr.slice((i * size), (i * size) + size)
                }
                this.allBarData = subarray
            },
            random(setData) {
                for (let x = 0; x < setData; x++) {
                    this.getRandomData()
                }
            }
            
        },
        mounted() {
            this.random(this.lineSeparateSize)
            this.random(this.barSeparateSize)

            this.separateLineData(this.lineData, this.lineSeparateSize)
            this.separateBarData(this.barData, this.barSeparateSize)
         
            for (let i = 0; i < lineLabels.length; i++) {
                this.lineChartData.labels.push(lineLabels[i])

                const lineItems = {
                    label: lineLabels[i],
                    lineTension: 0,
                    data: this.allLineData[i],
                    backgroundColor: 'transparent',
                    borderColor: lineColors[i],
                    borderWidth: 2
                }
                this.lineChartData.datasets[i] = lineItems
            }
            this.lineLoad = true

            for (let b = 0; b < barLabels.length; b++) {
                this.barChartData.labels.push(barLabels[b])

                const barItems = {
                    label: barLabels[b],
                    lineTension: 0,
                    data: this.allBarData[b],
                    backgroundColor: barColors[b],
                    borderColor: barColors[b],
                    borderWidth: 2
                }
                this.barChartData.datasets[b] = barItems
            }
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