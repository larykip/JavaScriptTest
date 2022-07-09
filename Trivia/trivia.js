 //we create our trivia constructor with three parameters: questions, options and an answer
 function Questions(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
 }

 let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11;

 //we create questions by instantianting the constructor

 q1 = new Questions('In what year was the first-ever Wimbledon Championship held?', [1955, 1877, 2001, 2020], 1);
 q2 = new Questions('Hg is the chemical symbol of which element?', ['Mercury', 'Sodium', 'Gold', 'Nitrogen'], 0);
 q3 = new Questions('Which song by Luis Fonsi and Daddy Yankee has the most views (of all time) on YouTube?', ['Vacio', 'Despacito', 'Imposible', 'Tanto'], 1);
 q4 = new Questions('What is the capital city of Spain?', ['Barcelona', 'Catalonia', 'Madrid'], 2);
 q5 = new Questions('What is the painting \“La Gioconda\” more usually known as?', ['Portrait of Ginevra Benci', 'Salvator Mundi', 'Vitruvian Man', 'The Mona Lisa', 'The Last Supper'], 3);
 q6 = new Questions('Which scientist was awarded the 1921 Nobel Prize in physics?', ['Leonardo Da Vinci', 'Charles Darwin' ,'Andy Cohen', 'Albert Einstein'], 3);
 q7 = new Questions('What is the hardest rock?', ['Sulphur', 'Diamond', 'Gold'], 1);
 q8 = new Questions('Which boxer was known as “The Greatest” and “The People’s Champion”?', ['Muhammad Ali', 'Mike Tyson', 'Tyson Fury', 'Manny Pacquiao'], 0);
 q9 = new Questions('What is your body’s largest organ?', ['Ears', 'Tongue', 'Nose', 'Skin'], 3);
 q10 = new Questions('Which company owns Bugatti, Lamborghini, Audi, Porsche, and Ducati?', ['Mercedes', 'Nissan', 'Volkswagen', 'Tesla'], 2);
 q11 = new Questions('How many children does Oprah Winfrey have? ', ['Zero', 'Two', 'Three', 'Four'], 0);

 // We create the constructor prototype methods which will be used by the questions objects

Questions.prototype.displayQuestions = function(){
    console.log(this.question);
    for(x = 0; x < this.options.length; x++){
        console.log(x + ': ' + this.options[x]);
    }
}

Questions.prototype.checkAnswer = function(ans, quizScore){
    let score
    if(ans === this.answer){
        console.log('Correct!');
        score = quizScore(true);
    } else {
        console.log('Incorrect! Please try again!');
        score = quizScore(false);
    }
    this.displayScore(score);
}

Questions.prototype.displayScore = function(score){
    console.log('Your current Score is: ' + score);
    console.log('---------------------------------------------------------------------------');
}

// we put the questions in an array so we can access using it's index in the array
let quiz = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

/*we create a random generator function that picks a random number and also ensure that the previous random number
is not same as the current number*/

function randomNumber(){
    let random;
    do {
        random = Math.floor(Math.random() * quiz.length);
    } while(random === randomNumber.last)
    randomNumber.last = random

    return random;
}

//we create a closure that will help us in awarding scores
function score(){
    let myScore = 0;
    return function(correct){
        if(correct){
            myScore++;
        }
        return myScore;
    }
}
let keepScore = score();


// we create a function which display the next question after the user inputs an answer

function nextQuiz(){
    let v = randomNumber();
    console.log('Question ' + v);
    quiz[v].displayQuestions();
    // we create a prompt pop-up which prompts the user to input an answer
    let answer = prompt('Please select the correct answer:');
    //we convert the user input which comes as a string into an integer using parseInt
    let ans = parseInt(answer);
    //we will have an exit whereby if a user inputs an exit he can quit the questions
    if(answer !== 'exit'){
        quiz[v].checkAnswer(ans, keepScore);
        nextQuiz();
    } else{
        alert('Your total score is: ')
    }

}
nextQuiz();

