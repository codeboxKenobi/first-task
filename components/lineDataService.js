export const lineLabels = [
    "Валок 1",
    "Валок 2",
    "Валок 3",
    "Валок 4",
    "Валок 5",
    "Валок 6",
    "Валок 7",
    "Валок 8",
    "Валок 9",
    "Валок 10",
]

export const lineColors = [
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

export function addLineItem(lineSeparateSize) {
    if (lineLabels) {
        for (let i = 0; i < lineLabels.length; i++) {
            lineColors.push(randomColor())
        }
        lineSeparateSize = lineLabels.length
        return lineSeparateSize
    }
}