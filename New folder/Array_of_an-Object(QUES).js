let obs = [{fn: "nun", id: 1}, {fn: "two", id: 2}, {fn: "non", id: 3}, {fn: "three", id: 4}];
let obByid={};
function isPlaindrome(str){
    return str === str.split('').reverse().join('');         // 🙇‍♂️🙇‍♂️ Direct str.reverse() is not possible because it is an Array method 
}
obs.forEach(ob=>{
    const fn = ob.fn;
    const id = ob.id;
    if (isPlaindrome(fn)) {
           if (!obByid[fn]) {
               obByid[fn]=[];
            
           }
           
            obByid[fn].push(ob);         // 🙇‍♂️🙇‍♂️🙇‍♂️ Push the Entire Object into an Array.
                  
    }
});

console.log(obByid);
