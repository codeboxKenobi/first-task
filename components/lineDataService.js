export const lineLabels = [
    "Валок 1",
    "Валок 2",
    "Валок 3",
    "Валок 4",
    "Валок 5",
    "Валок 6",


]

export const lineColors = [
    "rgba(83, 74, 190, 1)",
    "rgba(232, 230, 45, 1)",
    "rgba(64, 146, 181, 1)",
    "rgba(94, 207, 150, 1)",
    "rgba(245, 40, 145, 1)"
]



export function addLineItem(separateSize) {
    if (lineLabels) {
        console.log(lineLabels.length);
        separateSize = lineLabels.length
        return separateSize
    }
}