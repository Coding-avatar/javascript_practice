/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param {Array<number>} arr - The array to sort.
 * @returns {Array<number>} A new array with the elements sorted in ascending order.
 */

function mergeSort(arr){
    if(arr.length<2) return arr;
    const mid = Math.floor(arr.length/2);
    const left_array = arr.slice(0,mid);
    const right_array = arr.slice(mid);
    return merge(mergeSort(left_array),mergeSort(right_array))
}

/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param {Array<number>} leftArr - The left array to merge.
 * @param {Array<number>} rightArr - The right array to merge.
 * @returns {Array<number>} A new array with the elements from both input arrays sorted in ascending order.
 */

function merge(leftArr,rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr,...leftArr,...rightArr];
}

module.exports = mergeSort;