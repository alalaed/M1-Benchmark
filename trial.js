const randomNumbers = function(){
    let randArray = []
    for(i=0; i<10;i++){
        let x = Math.floor(Math.random()*101)
        randArray.push(x)
        
    } return randArray
}

//console.log(randomNumbers())

let largeArray = []
const arrayOfArrays = function(){
    for(i=0; i<10; i++){
        
        let random = randomNumbers()
        largeArray.push(random)
    }return largeArray
}

console.log(arrayOfArrays())