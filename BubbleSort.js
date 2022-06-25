//One of the basic Algorithm for sorting
//In efficent with time complexity of O(n^2)
//Space complexity is O(n) as we are not using extra datastructures
//In this we loop through each element and comare the adjacent element if its small we swap it
//We use two nested for loops

function bubbleSort(array){
    const length=array.length;
    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(array[j]>array[j+1]){
                //Swap elements
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
}

const numbers=[99,44,6,2,1,5,63,87,283,4,0];
bubbleSort(numbers);
console.log(numbers);
