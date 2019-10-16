function checkArray(arr){
    var newArray = []
    arr.forEach(function(num){
        if (num > 5){
            newArray.push(num)
            console.log(newArray)
        }
        else if(num<=4){
            newArray.push(5)
            console.log( "number = " + newArray)
        }       
    })
    return newArray  
}

