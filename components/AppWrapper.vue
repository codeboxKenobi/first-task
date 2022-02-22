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
                        "",
                        "Валок 1",
                        "Валок 2",
                        "Валок 3",
                        "Валок 4",
                        "Валок 5",
                        "",
                    ],
                    datasets: [
                        {
                            label: "Visualizaciones",
                            data: [],
                            backgroundColor: "rgba(20, 255, 0, 0.3)",
                            borderColor: "rgba(100, 255, 0, 1)",
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
                            label: "Visualizaciones",
                            data: [],
                            backgroundColor: "rgba(20, 255, 0, 0.3)",
                            borderColor: "rgba(100, 255, 0, 1)",
                            borderWidth: 2,
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
                        width: "600px"
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
                                    max: 10,
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
@import 'static/syles.scss';
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
    width: 50%;
}
.bar-chart {
    height: 300px;
    width: 50%;
}
</style>