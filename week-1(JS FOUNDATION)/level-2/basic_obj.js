// //object litrels
// const mysym=symbol("key1")
// //object freeez
// Object.freeze(JsUser)
// //dont let change anything

const tinderUser=new Object()
tinderUser.id="1234"
tinderUser.name="sana"
tinderUser.isLoggedIn=false
// console.log(tinderUser)
const regularUser={
    email:"sanacodes21",
    fullname:{
        userfullname:{
            firstname:"sana",
            lastname:"osman"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname)
//to merge object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3=Object.assign(obj1,obj2)
const obj3=Object.assign({},obj1,obj2)//initialing an empty obj
// console.log(obj3)
// const obj3={...obj1,...obj2}//using spearater
// console.log(obj3)

//whenver values comes from database
const users=[
    {
        id:1,
        email:"sanaosman"
    },
     {
        id:2,
        email:"sanaosman2"
    },
     {
        id:3,
        email:"sanaosman3"
    },
     {
        id:4,
        email:"sanaosman4"
    }
]
// console.log(users[1].id)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))//asking it has that property or not

//destructuring
const course={
    coursename:"js in hindi",
    price:"100",
    courseintructor:"sana"
}
const {price:cost}=course
console.log(cost)
