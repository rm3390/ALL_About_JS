(function demo(){
    console.log("Hi,demo1");
})();
  
// 🙇‍♂️👀🚨👀  Need semicolon (;) after every IIFE for next funtion execution.

(function demo2(value){
    console.log(`Hi,demo ${value}`);
})(2);

(function demo3(value){
    console.log(`Hi,demo${value}`);
})(3)