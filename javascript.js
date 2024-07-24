//Finding maximum in an array
function maximumFind(arr, n)
{
    let maxCount = 0;
    let index = -1; 
    
for(let i = 0; i < n; i++){
        let count = 0;
        for(let j = 0; j < n; j++) 
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count > maxCount) 
        {
            maxCount = count;
            index = i;
        }
    }
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}
let arr = [ 1, 1, 2, 1, 3, 5, 1 ];
let n = arr.length;
maximumFind(arr, n);

//Function to add three numbers and print its values
function addThree(a,b,c){
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    return a+b+c;
}

console.log(addThree(12,44,67));

//Array manipulation
let numbers = [1,2,3,4,5];
let changed = numbers.map(function(val){
    return val*2;
})
console.log(changed);

//Array splice
let array = [1,2,3,4,5];
let new_arr = array.splice(2,0,3);
console.log(new_arr);

//Rotate an array (Right)
function rotate(arr,count){
    let length = arr.length;
    let count = count % length;
    return arr.slice(-count).concat(arr.slice(0,-count));
}
console.log(rotate([1,2,3,4,5],4));

//Altering an array inserting and deleting
let list = [1,2,3,4,5];
let new_list = list.splice(2,2,3);
console.log(new_list);
