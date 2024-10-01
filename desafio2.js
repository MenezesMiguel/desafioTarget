console.log(isFiboNumber(987));

function isFiboNumber(number) {
    let fiboArray = [0, 1];
    let isFiboNumber = false
    while (fiboArray[fiboArray.length - 1] <= number){
      fiboArray.push(fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]) 
    }
    fiboArray.includes(number) ? isFiboNumber = true : isFiboNumber = false
    return isFiboNumber
  }
  