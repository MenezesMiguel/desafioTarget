let faturamento = [{"state": "SP", "faturamento": 67836.43},{"state": "RJ", "faturamento": 36678.66},{"state": "MG", "faturamento": 29229.88}, {"state": "ES", "faturamento": 27165.48}, {"state": "Outros", "faturamento": 19849.53}]

calcStateContr(faturamento)

function calcStateContr(faturamento) {
    let totalEarn = 0;
    faturamento.forEach(state => {
      totalEarn += state.faturamento;
    })
    faturamento.forEach(state => {
      console.log("O estado " + state.state + " contribuiu com " + (state.faturamento*100/totalEarn).toFixed(2) + "% do faturamento");
    })
  }