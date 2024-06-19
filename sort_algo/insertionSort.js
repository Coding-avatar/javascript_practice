/**
 * Sorts an array of numbers using the insertion sort algorithm.
 *
 * @param {Array<number>} arr - The array to sort.
 * @returns {Array<number>} A new array with the elements sorted in ascending order.
 */

function insertionSort(arr){
    if(arr.length===0) return [];
    if(arr.length===1) return arr;
    let sortedArr = Array.from(arr);
    for(let i=1;i<sortedArr.length;i++)
    {
        let number_to_insert=sortedArr[i];
        let sorted_index = i-1;
        while(sorted_index>=0 && sortedArr[sorted_index]>number_to_insert){
            sortedArr[sorted_index+1]=sortedArr[sorted_index];
            sorted_index=sorted_index-1;
        }
        sortedArr[sorted_index+1]=number_to_insert;
    }
    return sortedArr;
}

module.exports = insertionSort;