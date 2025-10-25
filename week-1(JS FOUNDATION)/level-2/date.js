// // let mydate=new Date()
// // // console.log(mydate.toString())
// // // console.log(mydate.toDateString())
// // // console.log(mydate.toISOString())
// // // console.log(mydate.toJSON())
// // // console.log(mydate.toLocaleTimeString())
// // // console.log(mydate.toLocaleString())
// // console.log(typeof mydate)
// // let newdate=new Date()
// // console.log(newdate.getDate())
// // console.log(newdate.getDay())
// // console.log(newdate.getMonth()+1)
// // console.log(newdate.toLocaleString("default",{
// //     weekday:"long"
// // }))
// function dateMethods() {
//   const currentDate = new Date();
//   console.log("Current Date:", currentDate);

//   // Getting various components of the date
//   console.log("Date:", currentDate.getDate());
//   console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//   console.log("Year:", currentDate.getFullYear());
//   console.log("Hours:", currentDate.getHours());
//   console.log("Minutes:", currentDate.getMinutes());
//   console.log("Seconds:", currentDate.getSeconds());

//   // Setting components of the date
//   currentDate.setFullYear(2022);
//   console.log("After setFullYear:", currentDate);

//   currentDate.setMonth(5); // Setting month to June (zero-indexed)
//   console.log("After setMonth:", currentDate);

//   // Getting and setting time in milliseconds since 1970
//   console.log("Time in milliseconds since 1970:", currentDate.getTime());

//   const newDate = new Date(2023, 8, 15); // Creating a new date
//   console.log("New Date:", newDate);
// }

// // Example Usage for Date Methods
// dateMethods();

//creation 
let now =new Date(-24*3600*1000)
console.log(now)
let date = new Date("2017-01-26");
console.log(date);
//new Date(year, month, date, hours, minutes, seconds, ms)
let date1 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date1 ); // 1.01.2011, 02:03:04.5671