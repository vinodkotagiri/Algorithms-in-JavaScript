//Merge sort uses divide and conquer
//Has a time complexity of O(nlongn) and space complexity O(n)
//Divide the array into half and divide each of subset into halves until we have one item
//compare each node and place accordingly
//Uses recursion

function mergeSort(array){
    const length=array.length;
    if(length===1) return array;

    //Split the arrray into left and right
    const middle=Math.floor(length/2);
    const left=array.slice(0,middle);
    const right=array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    const result=[];

    let leftIndex=0;
    let rightIndex=0;
    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numbers=[99,44,6,2,1,5,63,87,283,4,0];
console.log(mergeSort(numbers));