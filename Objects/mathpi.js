// const desp = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(desp);

const obj =
{
    name:"Tm",
    course:"CS",
    year:4,
    isAvailable:true
} 
Object.defineProperty(obj, 'name',{  writable: false, enumerable: true})
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));
                                    //        ^      ^
                                    //        |      |
//                                    ObjectName     propertyName 
obj.name ="Rm";
console.log(obj);


