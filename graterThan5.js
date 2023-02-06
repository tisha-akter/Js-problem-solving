/* emon ekta function banao jeta ekti array input hisabe nibe.sei array er moddhe 5 ar cheye boro sokkha count korbe. jar input-
input : [-1,2,-3,4,5,6,-7,-8,-9,10]
output:3 
*/ 

/* concept
let num = 4;
if (num < 5 ){
    console.log('yes')
}
else {
    console.log('no')
}
*/ 


// let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];
// let count = 0;

// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     // console.log(element)
//     if(element > 5){
//         // console.log("Yes");
//         count = count +1;
//     }
//     else{
//         // console.log("No");
//     }
// }
// console.log(count);


// solution
function graterThanFive(numbers){
    let count = 0;

    for(i = 0; i<numbers.length; i++){
        const element = numbers[i];
        if (element>5){
            count++;
        }
        else{
            continue
        }
    }
    return count;
}
let result = graterThanFive([-1,2,-3,4,5,6,-7,8,-9,10]);
console.log(result);

