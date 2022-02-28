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

export function addBarItem(barSeparateSize) {
    if (barLabels) {
        console.log(barLabels.length);
        barSeparateSize = barLabels.length
        return barSeparateSize
    }
}


