
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

const randomNumbers = function(n){
    let randArray = []
    for(i=0; i<n;i++){
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

// ex 28

const createArray = function(){

}
const arrayOfArrays = function(){
    let arr = []
}

let largeArray = []
const arrayOfArrays = function(){
    for(i=0; i<10; i++){
        
        let random = randomNumbers()
        largeArray.push(random)
    }return largeArray
}

console.log(arrayOfArrays(n))


// ex 29

let arr1 = [1,2,3,4,5,6]
let arr2 = [1,2,3,4,5,6,7,8,9]

const compare = function(x,y){
    if (x.length>y.length){
        console.log("The longer array is:" + x)
    } else{
        console.log("The longer array is:" + y)
    }
}

compare(arr1,arr2)

// ex 30 

const sumOfArray = function(x,y){
    let sum=0
    for(i=0; i<x.length; i++){
        sum += x[i]
    }
        for(i=0; i<y.length; i++){
            sum += y[i]
        }console.log(sum) 
}
sumOfArray(arr1,arr2)


// ex31

let elementWithIDContainer = document.getElementById("container")

// ex 32

let allTDs = document.getElementsByTagName("td")

// ex 33

for(i=0; i<allTDs.length; i++){
    console.log(allTDs[i])
}

//ex34

const headingChange = function(){
    alert("it works")
    let heading = document.querySelectorAll("h1")[0]
    heading.innerText = "It did change"

}