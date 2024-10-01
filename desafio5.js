console.log(revertString("Miguel Menezes"));

function revertString(string){
    let stringArray = string.split("");
    let revertedString = "";
    for(let i = stringArray.length - 1; i >= 0; i--){
      revertedString += stringArray[i]
    }
    return revertedString;
  }