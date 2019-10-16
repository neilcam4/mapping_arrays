describe('MAPPING arrays', function(){
    it('check if number is between 5 and 10', function(){
        var arr = [3,3,3]
        var result = checkArray(arr)
        expect(result).toEqual([5,5,5])
    })
    it('should go through array and if its false, return a number 5 in an array', function(){
        var arr = [1]
        var result = checkArray(arr)
        expect(result).toEqual([5])
    })
    it('should go through larger array, check if number bigger than 5, change it to 5, retur full array', function(){
        var arr = [11, 6, 8, 7, 9]
        var result = checkArray(arr)
        expect(result).toEqual([11, 6, 8, 7, 9])
    })
})

//get given an array of numbers
// sort through them and turn any numbers lower than 5 and higher than 10 into 5 and 10 respectively

// return array