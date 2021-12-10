let arr1 = [1,2,3,4,5,6]
let arr2 = [1,2,3,4,5,6,7,8,9]

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