//Selection sort has timecomplexity of O(n^2) and space complexity of O(n)
//finds the smallest number in array and places it in the first

function selectionSort(array){
    const length=array.length;
    for(let i=0;i<length;i++){
        //Set current index as minimum
        let min=i;
        let temp=array[i];
        for(let j=i+1;j<length;j++){
            //update the minimum if current is lower than what we had previously
            if(array[j]<array[min]){
                min=j;
            }
        }
        array[i]=array[min];
        array[min]=temp;
    }
    return array;
}

const numbers=[99,44,6,2,1,5,63,87,283,4,0];
selectionSort(numbers);
console.log(numbers);