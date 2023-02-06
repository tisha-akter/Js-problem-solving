// 1rad × 180/π = 57.296°

function radianToDegree(radian){
    const PI = 3.14159;
    const degree = (radian * (180/PI)).toFixed(2);
    return degree;
}
let result = radianToDegree(199);
console.log(result);
