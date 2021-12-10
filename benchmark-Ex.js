let x = "John"
let y = "Doe"
console.log(x + " <> " + y)


let student = {
    name: "Ali",
    surname: "Alaeddine",
    email: "a.alaeddine@live.com"
}

delete student.email
console.log(student)

let arr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

    for ( i=0; i<arr.length; i++){
        console.log(arr[i])
    }

    /*let randArr = []
    for(i=0; i<100;i++){
        let x = 0
        x = i + 1
        randArr.push(x)
        console.log(randArr)
    }*/
    
    // or for completely random numbers

const randomNumbers = function(){
    let randArray = []
    for(i=0; i<100;i++){
        let x = Math.floor(Math.random()*101)
        randArray.push(x)
        
    } console.log(randArray)
}

randomNumbers()