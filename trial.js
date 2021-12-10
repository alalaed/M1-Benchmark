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
