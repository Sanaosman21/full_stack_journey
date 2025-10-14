// let count=30
// function timer(){
//     console.log(count)
//     count--
//     if (count<0){
//         clearInterval(IntervalID)
//         console.log("countdown finished!")
//     }
// }
// let IntervalID=setInterval(timer,1000)
//. Calculate the time it takes between a setTimeout call and the inner function actually running 
// //2. Calculate the time it takes between a setTimeout call and the inner function actually running
// const start = Date.now();
// console.log(start)
// setTimeout(function() {
//   const end = Date.now();
//   console.log(end)
//   console.log(end - start); // This will show the time elapsed—in milliseconds
// }, 1000); // Expected ~1000 ms

function pad(num) {
  return num < 10 ? '0' + num : num;
}

setInterval(() => {
  const now = new Date();
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  console.clear();
  console.log(`${hh}:${mm}:${ss}`);
}, 1000);
