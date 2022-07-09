let myData = [4, 13, 28, 35, 7];
// let x = myData.length
// let myId = (x)+1
// console.log(myId + ' total length is: ' + x);
let sum = 0
myData.forEach(function(cur, ind, arr) {
    sum += cur;
    console.log(cur + ' index is: ' + ind + '  ' + arr);
});