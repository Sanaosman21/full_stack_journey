//clone of objects
let user={
 name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

// console.log( user.name ); // still John in the original object
//We can also use the method Object.assign.
// //Object.assign(dest, ...sources)
let user2={
    name:"sana"
}
let property1={id:"1234"};
let property2={password:"12345"}
Object.assign(user2,property1,property2)
console.log(user2.id)
console.log(user2)
//example2
// let user3 = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(user.name); // John
// console.log(user.canView); // true
// console.log(user.canEdit); // true

//We also can use Object.assign to perform a simple object cloning:
let user4 = {
  name: "John",
  age: 30
};

let clone1 = Object.assign({}, user4);

// console.log(clone1.name); // John
// console.log(clone1.age); // 30
// console.log(clone1)
console.log(clone1===user4)