console.log("sana osman");
console.log("hello world");
//varibles
let fullname="mohammed0";
let age=20;
console.log(fullname);
console.log(age);
//var can be redeclare
//let does not allow to redeclare
//const are the kind of variables neither redeclare nor update .generally rprefer to write in capital letters
const PI=3.14;
console.log(PI);
//DATA TYPES
//primitive data types vlues can be diff tyoes data types.string,number,boolean
// non-primitive 1)object->collection of values 
//in object value is store in the form of key value pair
const std ={
    name:"Sana",
    age:20,
    marks:947,
    cgpa:8.7,
    ispass:true,
};
console.log(std);
console.log(std["age"]);
console.log(std.name);
std["age"]=std["age"]+1;
console.log(std.age)
//const obj key can be updated
const product={
    titleName:"ball pen",
    price:270,
  
    offer:5,
    rating:4
}
console.log(product);
const profile={
    username:"binte_osman",
    noOfPosts:195,
    followers:569,
    following:4,
    bio:"dwecedcxs",
    isFollow:true,
};
console.log(profile);
console.log(typeof profile["isFollow"]);

