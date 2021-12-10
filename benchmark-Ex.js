
// ex 21


let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

//ex 22


let student = {
    name: "Ali",
    surname: "Alaeddine",
    email: "a.alaeddine@live.com"
}


// ex23
delete student.email


//ex24

let arr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]


//ex25
    for ( i=0; i<arr.length; i++){
        console.log(arr[i])
    }


// ex.26

const randomNumber = function(){
    let randArr = []
    for(i=0; i<100;i++){
        let x = 0
        x = i + 1
        randArr.push(x)
        
    }console.log(randArr)
}


// or for completely random numbers
//ex.26

const randomNumbers = function(){
    let randArray = []
    for(i=0; i<10;i++){
        let x = Math.floor(Math.random()*101)
        randArray.push(x)
        
    } return randArray
}
let randomNumberArray = randomNumbers()
console.log(randomNumberArray)

// ex.27
// Maximum / Minimum

const maximum = function(){
    
    let maximum = 0
    for(i=0; i<randomNumberArray.length;i++){
        if (randomNumberArray[i]>maximum){
            maximum = randomNumberArray[i]
        }     
    } return maximum   
}

console.log(maximum())

const minimum = function(){
    
    let minimum = randomNumberArray[0]

    for(i=0; i<randomNumberArray.length;i++){
        if (minimum > randomNumberArray[i]){
            minimum = randomNumberArray[i]
        }
    }return minimum
}
console.log(minimum())
