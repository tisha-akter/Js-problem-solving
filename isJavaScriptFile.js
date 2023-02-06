function isJavaScriptFile(fileName){
    if(fileName.endsWith('.js')){
       return true;
    }
    else{
        // console.log("no")
        return false;
    }
}
let result = isJavaScriptFile("index.js");
console.log(result);