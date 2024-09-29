 const myNums=[1,2,3,]

 const myTotal = myNums.reduce(function(acc,currval){
      console.log(`acc:${acc} and currval:${currval}`);
     return acc+currval;
 },3)    // acc= acc+curval ( after 1st round(acc:{initialised value first time}) 
 console.log(myTotal);