/**
 * Sorts an array of numbers using the quick sort algorithm.
 *
 * @param {Array<number>} arr - The array to sort.
 * @returns {Array<number>} A new array with the elements sorted in ascending order.
 */

function quickSort(arr){
    if(arr.length<2) return arr;
    let sortedArr = Array.from(arr);
    let pivot = sortedArr[sortedArr.length-1]
    let left_array = []
    let right_array = []
    //need to do this over and over
    for(let i=0; i<sortedArr.length-1;i++){
        if(sortedArr[i]<pivot){
            left_array.push(sortedArr[i])
        }else{
            right_array.push(sortedArr[i])
        }
    }
    return [...quickSort(left_array),pivot,...quickSort(right_array)];
}

module.exports = quickSort;