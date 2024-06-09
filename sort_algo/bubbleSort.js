/**
 * Sorts an unsorted array using the bubble sort logic, 
 * compare two position and swap them if the first position is larger than the second position
 * repeat looping through the array until its sorted
 * @param {number[]} arr - input array of unsorted elements
 * @returns {number[]} - sorted array
 */
function bubbleSort(arr){
    if(arr.length===0) return [];
    const sortedArr = Array.from(arr);
    let isSorted = false;
    do{
        isSorted = true
        for(let i=0; i<sortedArr.length-1; i++){
            let firstNumber = sortedArr[i];
            let secondNumber = sortedArr[i+1];
            // To change sorting from ascending order to decending order change next line to "if(firstNumber<secondNumber)"
            if(firstNumber>secondNumber){
                sortedArr[i] = secondNumber;
                sortedArr[i+1] = firstNumber;
                isSorted = false;
            }
        }
    }while(!isSorted)
    return sortedArr;
}

module.exports = bubbleSort