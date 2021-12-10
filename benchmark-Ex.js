/*
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



let largeArray = []
const arrayOfArrays = function(){
    for(i=0; i<10; i++){
        
        let random = randomNumbers()
        largeArray.push(random)
    }return largeArray
}

console.log(arrayOfArrays(10))


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
*/
// ex 34

const headingChange = function(){
    
    let heading = document.getElementsByTagName("h1")[0]
    heading.innerText = "It did change"

}

// ex 35

const extraRow = function(){
    let link = document.querySelectorAll("table")
        let newRow = document.createElement("tr")
        link.appendChild(newRow)
}

// ex 36
const addClass = function(){
    let classedRow = document.querySelectorAll("tr")
    for(i=0; i<classedRow.length; i++){
        classedRow[i].classList.add("test")
    }
}


// ex 37

const redBackground = function(){
    let redBackground = document.getElementsByClassName("redded")
    for (i=0; i<redBackground.length; i++){
        redBackground[i].classList.backgroundcolor = ("red")
    }
}

// ex 38

window.onload= function(){
    console.log ("its ready")
}


// ex 39

const addNewItems = function(){
    let list = document.querySelectorAll("div ul")
    let newItem = document.createElement("li")
    list[0].appendChild(newItem)
    newItem.innerText = "and this is the added item to the unordered list"
}


// ex 40

const emptyList = function(){
    let list = document.querySelectorAll("ol li")
    for (i=0; i<list.length; i++){
        list[i].innerText = ""
    }
}


// ex 41

const hideImage = function(){
    let img = document.getElementsByTagName("img")
    for(i=0;i<img.length; i++){
        img[i].style.visibility=("hidden")
    }
}