let myData = [4, 13, 28, 35, 7];
// let x = myData.length
// let myId = (x)+1
// console.log(myId + ' total length is: ' + x);
// let sum = 0
// myData.forEach(function(cur, ind, arr) {
//     sum += cur;
//     console.log(cur + ' index is: ' + ind + '  ' + arr);
// });

//monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let now = new Date();
// let month = now.getMonth();
// //console.log(month);
// console.log(monthArr[month]);
/*let z
int = 43;
let conv = Math.abs(int);
conv = conv.toFixed(conv);
let sd = conv.split('.');
let x = sd[0][1];
let y = parseInt(x);
console.log(typeof(x));
if (y === 1){
    z = 'st'
} else if(y === 2){
    z= 'nd'
} else if(y === 3){
    z = 'rd'
} else{
    z = 'th'
}
console.log(z); */

//for of loop
// for(let el of monthArr){
//     console.log(el);
// }

//JavaScript ES6 Map

let trivia = new Map();
trivia.set('question', 'Who was the frist president of Kenya?');
trivia.set(1, 'Mwai Kibaki.');
trivia.set(2, 'Jomo Kenyatta.');
trivia.set(3, 'Daniel Moi.');
trivia.set(4, 'Uhuru Kenyatta.');
trivia.set('answer', 2);
trivia.set('correct', 'Congratulations. You are a pro!');
trivia.set('incorrect', 'Sorry. Please try again!');
console.log(trivia.get('question'));
for(let [key, value] of trivia.entries()){
    if(typeof(key) === 'number'){
        console.log(`${key}: ${value}`);
    }
}
let myAns = parseInt(prompt('Enter the correct answer:'));
if(myAns === trivia.get('answer')){
    console.log(trivia.get('correct'));
} else{
    console.log(trivia.get('incorrect'));
}