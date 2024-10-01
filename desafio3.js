import dados from './dados.json' with { type: 'json' };

let filteredData = dados.filter(day => day.valor !== 0)
filteredData.sort((a, b) => a.valor - b.valor);

console.log("O dia de menor faturamento foi " + filteredData[0].dia + ", o valor faturado foi R$ " + filteredData[0].valor + ".");
console.log("O dia de maior faturamento foi " + filteredData[filteredData.length - 1].dia + ", o valor faturado foi R$ " + filteredData[filteredData.length - 1].valor + ".");

let averageBilling = 0

filteredData.forEach( day => {
    averageBilling += day.valor
})

averageBilling = averageBilling/filteredData.length

filteredData = filteredData.filter(day => day.valor > averageBilling)

console.log( filteredData.length + " dias no mês em que o valor de faturamento diário foi superior à média mensal")