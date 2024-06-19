/**
 * Sorts an unsorted array using the bubble sort logic, 
 * compare two position and swap them if the first position is larger than the second position
 * repeat looping through the array until its sorted
 * @param {number[]} arr - input array of unsorted elements
 * @returns {number[]} - sorted array
 */
function bubbleSortOptimised(arr){
    const sortedArr = Array.from(arr)
    let isSorted = false
    let length = sortedArr.length - 1
    while(!isSorted){
        isSorted = true
        for(let i=0; i<length; i++){
            let firstNumber = sortedArr[i]
            let secondNumber = sortedArr[i+1]
            // To change sorting from ascending order to decending order change next line to "if(firstNumber<secondNumber)"
            if(firstNumber>secondNumber){
                sortedArr[i] = secondNumber
                sortedArr[i+1] = firstNumber
                isSorted = false
            }
        }
        //since atleast one element sorted at every pass we can reduce the inner loop by 1
        length--;
    }
    return sortedArr
}

module.exports = bubbleSortOptimised