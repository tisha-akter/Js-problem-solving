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