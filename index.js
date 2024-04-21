function multiply(x,z){
    return x*z
}

function concatOdds(array1,array2){
    const oddsArray = array1.concat(array2).filter(num => num % 2 !== 0).sort((a, b) => a - b)
    const result = []

    for (let num of oddsArray){
        if(!result.includes(num)) result.push(num)
    }

    return result
}


module.exports = {multiply, concatOdds}