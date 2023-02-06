/**
 * duti naam ekti funtion er parameter hisabe pass koro. ei duti namer moddhe jeti boro seti reverse order e return koro .
 * 
 * John and Alexis 
 * sixelA
 */

// let name1 = "John";
// let name2 = "Alexis";

// let friend1 = name1.length;
// let friend2 = name2.length;

// if (friend1 > friend2) {
//     console.log(name1.split("").reverse().join(""));
// }
// else {
//     console.log(name2.split("").reverse().join(""));
// }

// // method-1
function reverseName(name1, name2) {
    let friend1 = name1.length;
    let friend2 = name2.length;

    if (friend1 > friend2) {
        return name1.split("").reverse().join("");  
    }
    else {
        return name2.split("").reverse().join("");
    }

}

let result = reverseName("John", "Alexis");
console.log(result)




// method-2 for reversing a string



// concept
// length =6 
// last index = 6-1=5
// let str = "Alexis";
// for ( let i = 0; i<str.length;i++){
//     const element = str[i];
//     console.log(element)
// }
// console.log('-----------------------------')

// let str = "Alexis";
// let reversedString ="";
// for(let i=str.length-1; i >= 0; i--){
//     const element = str[i];
//     // console.log(element);
//     reversedString = reversedString+element
// }
// console.log(reversedString);

//--------
// function reverseName(name1, name2) {
//     let friend1 = name1.length;
//     let friend2 = name2.length;
//     let largeName = "";
//     let str = "Alexis";
//     if (friend1 > friend2) {
        
//         largeName = name1
//     }
//     else {
      
//         largeName = name2
//     }

//     let reversedString ="";
// for(let i=str.length-1; i >= 0; i--){
//     const element = str[i];
//     reversedString = reversedString+element;
// }
// return reversedString;
// }

// let result = reverseName("John", "Alexis");
// console.log(result)