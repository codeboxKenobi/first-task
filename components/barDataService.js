export const barLabels = [
    "Типоразмер 1",
    "Типоразмер 2",
    "Типоразмер 3",
    "Типоразмер 4",
    "Типоразмер 5",
    "Типоразмер 6",
    "Типоразмер 7",
    "Типоразмер 8",
]

export const barColors = [
    "rgba(83, 74, 190, 1)",
    "rgba(232, 230, 45, 1)",
    "rgba(64, 146, 181, 1)",
    "rgba(94, 207, 150, 1)",
    "rgba(245, 40, 145, 1)"
]

function randomColor() {
    let min = Math.floor(10)
    let max = Math.floor(600)
    return `rgba(${Math.floor(Math.random() * (max - min) + min)}, ${Math.floor(Math.random() * (max - min) + min)}, ${Math.floor(Math.random() * (max - min) + min)}, 1)`
}

export function addBarItem(barSeparateSize) {
    if (barLabels) {
        for (let i = 0; i < barLabels.length; i++) {
            barColors.push(randomColor())
        }
        barSeparateSize = barLabels.length
        return barSeparateSize
    }
}


