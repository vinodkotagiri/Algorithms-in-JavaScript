//Instertion sort is where array is almost sorted
//We first loop over the array if the item we are looping is less than first item we move it to first position
//We it's not we figure out where the number should go
//Best case is O(n) and worst case is O(n^2)
function insertionSort(array){
    const length=array.length;
    for(let i=0;i<length;i++){
        if(array[i]<array[0]){
            //move the number to first position
            array.unshift(array.splice(i,1)[0]);
        }else{
            //find where the number should go
            for(let j=1;j<i;j++){
                if(array[i]>=array[j-1] && array[i]<=array[j]){
                    //move the number to the right spot
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }
    }
}

const numbers=[99,44,6,2,1,5,63,87,283,4,0];
const numbers2=[57,38,91,10,38,28,79,41]
insertionSort(numbers);
insertionSort(numbers2);
console.log(numbers);
console.log(numbers2);