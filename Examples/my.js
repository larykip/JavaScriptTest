/*
    function interviewQuiz(job) {
    return function (name) {
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }
        else if(job === 'teacher'){
            console.log(name + ', What subject do you teach?')
        }
        else{
            console.log('Hello ' + name + '. What profession do you pursue?')
        }
    }
}
let profession = interviewQuiz('mechanic')('Mary');
console.log(profession);
*/

// let years = [1981, 1993, 1965, 1970, 2008]

// function arrayCalc(arr, fn){
//     let newArr = []
//     for(x = 0; x < arr.length; x++){
//         newArr.push(fn(arr[x]));
//     }
//     return newArr;
// }

// function ageCalc(yob) {
//     return 2022-yob
// }

// function adultChecker(limit, age){
//     return age >=limit
    
// }

// let answer = arrayCalc(years, ageCalc);
// console.log(answer);

// let myChecker = arrayCalc(answer, adultChecker.bind(this, 18));
// console.log(myChecker);

// (function () {
//     let  MyQuestion = function(question, options, answer) {
//         this.question = ['Which year did Kenya got independence?', 'Who was the second president of the republic of Kenya?', 'Which year was the new constitution of Kenya Promulgated?'];
//         this.options = [[1957, 1963, 1960, 1964], ['Mwai Kibaki', 'Uhuru Kenyatta', 'Daniel Toroitich Arap Moi', 'Jomo Kenyatta'], [2010, 2005, 1997, 2013]];
//         this.answer = [1963, 'Daniel Toroitich Arap Moi', 2010]
//         this.questionDisplay = function(){}
    
//     }
    
//     let V = new MyQuestion();
//     let y = Math.floor(Math.random() * 3);
//     //console.log(y);
//     console.log(V.question[y]);
//     //console.log(V.options[y]);
    
//     function questionDisplay(){
//         let arr = V.options[y];
//         for( x = 0; x < arr.length; x++ ){
//             console. log(x + ': ' + V.options[y][x]);
//         }
//     }
    
//     function checkAnswer(){
//         let myAnswer = prompt('Please select the number that has the correct answer');
//         if(V.options[y][myAnswer] === V.answer[y]) {
//             return console.log('Correct Answer!');
//         } 
//         else {
//             console.log('Incorrect!');
//             let newAnswer = prompt('Please select the number that has the correct answer');
//             if(V.options[y][newAnswer] === V.answer[y]){
    
//                 return console.log('Correct Answer!');
//             }
//             else {
//                 console.log('Incorrect! Try Later');
//             }
//         }

         
        
    
//     }
//     questionDisplay();
//     checkAnswer();
// })();

//alternative 

//create questions constructor
function Questions (questions, options, answer){
    this.questions = questions;
    this.options = options;
    this.answer = answer;
}

Questions.prototype.displayQuestions = function(){
    console.log(this.questions);
    for(x = 0; x < this.options.length; x++){
        console.log(x + ': ' + this.options[x]);
    }
}

Questions.prototype.checkAnswer = function(ans){
    if(ans === this.answer){
        console.log('Correct Answer!');
        //console.log(myScore);
    }
    else {
        console.log('Incorrect Answer. Please try again!');
    }
}

//we create question objects that is instantiated by the Question constructor

let q1 = new Questions('Which Country colonized Kenya?', ['Germans', 'British', 'French', 'Russia'], 1);

let q2 = new Questions('Who was the German Chancellor and the leader of the Nazi Party during WWII?', ['Benito Musolini', 'Josef Stalin', 'Adolf Hitler', 'Winston Churchill'], 2);

let q3 = new Questions('What is the Capital city of Liberia?', ['Monrovia', 'Kinshasa', 'Greenville', 'Harper'], 0);

let q4 = new Questions('Who was the first president of USA?', ['JF Kennedy', 'Bill Clinton', 'Abraham Lincoln', 'George Washington'], 3);

//we place the questions in an array so we will later display randomly
let myQuiz = [q1, q2, q3, q4];

function randomNumber(){
    let x = myQuiz.length
    let random;
    do {
        random = Math.floor(Math.random() * x)
    } while(random === randomNumber.last)
    randomNumber.last = random;
    return random;

};

// function score(){
//     let currentScore = 0;
//     return function(){
//         currentScore++;
//     }
// }
// let myScore = score();


function nextQuestion(){
    let n = randomNumber();
    console.log('Question ' + n)
    myQuiz[n].displayQuestions();
    let answer = prompt('Select the Correct answer:');
    let answerConvert  = parseInt(answer);
    if(answer !== 'exit'){
        myQuiz[n].checkAnswer(answerConvert);
        nextQuestion();
    }
}
nextQuestion();

// let myEx = ['a', 'b', 'c', 'd', 'e'];

// function my(){
//     let y = 0;
//     let x = myEx.length;
// }

// //console.log(myEx)

// let z = my()
// console.log(z);
