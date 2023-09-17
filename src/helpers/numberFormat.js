export function numberToPrice(value = 0) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }) 
}

export function numberToPercent(value = 0) {
    return value.toLocaleString('pt-BR', {
        style: 'percent',
        minimumFractionDigits:2
    }) 
}
