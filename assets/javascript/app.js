console.log("test")
// You 'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them
// for choosing the right option.After a few seconds, display the next question--do this without user input.

//   The scenario is similar
// for wrong answers and time - outs.

// If the player runs out of time, tell the player that time 's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer.Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game(without reloading the page).


// All ten quesetions for the game, array of object
// 1. What kind of animal is their sensi
// 2. what brother wears a blue banddana?
// 3.what brother wears a Red banddana?
// 4.what brother wears a Orange banddana?
// 5.what brother wears a Purple banddana?
// 6. What is the name of their Arch nemesis
// 7. Shredder is the leader of the "_____" clan
// 8. The brother are names after Famouse "____"
// 9. What city do they Protect?
// 10. What is their favorite food?

var quiz = [{
    question: "What kind of animal is their sensi",
    options: ["A Rat", "A Mouse", "A Ferret", "A Rabbit"],
    correctAnswer: "A Rat",
},
{
    question: "Which Brother wears the Blue bandana?",
    options: ["Michaelangelo", "Leonardo", "Raphael", "Donatello"],
    correctAnswer: "Leonardo",
},
{
    question: "Which Brother wears the Red bandana",
    options: ["Leonardo","Michaelangelo", "Donatello", "Raphael"],
    correctAnswer: "Raphael",
},
{
    question: "Which Brother wears the Purple bandana",
    options: ["Raphael", "Leonardo","Michaelangelo", "Donatello" ],
    correctAnswer: "Donatello",
},
{   
    question: "Which Brother wears the Orange bandana",
    options: ["Leonardo","Michaelangelo", "Donatello", "Raphael"],
    correctAnswer: "Michaelangelo",
},
{
    question: "What is the name of their Arch nemesis",
    options: ["Splinter", "Shrek", "Elias", "Shredder"],
    correctAnswer: "Shredder",
},
{
    question: "Shredder is the leader of the  ____ clan",
    options: ["Hand", "Head", "Foot", "Toe"],
    correctAnswer: "Shredder", 
},
{
    question: "The brothers are named after Famouse ____",
    options: ["Actors", "Artists", "War Captains", "Authors"],
    correctAnswer: "Artists",
},
{
    question: "What city do they Protect?",
    options: ["Salt lake City", "Los Angeles", "New York", "Detroit"],
    correctAnswer: "New York",
},
{
    question: "Where do the Turtles Live?",
    options: ["Above Pizza Hut", "Abandoned Subway", "The Roof Tops", "The Sewer"],
    correctAnswer: "The Sewer",
}
];

console.log(quiz.length)

// create all global variables
var currentQuestion = 0;
var timerCount = 10;
var timerId;
var correct = 0;
var wrong = 0;


// populate buttons and make sure the bottons work the buttons works

function generateQuestion() {
    if (currentQuestion < quiz.length-1){
        $(`#questionsRow`).empty();
        var question = $(`
        <div class="col-md-12 container">
            <h1>${quiz[currentQuestion].question}</h1>
            <button id= "option">${quiz[currentQuestion].options[0]}</button>
            <button id= "option">${quiz[currentQuestion].options[1]}</button>
            <button id= "option">${quiz[currentQuestion].options[2]}</button>
            <button id= "option">${quiz[currentQuestion].options[3]}</button>
        </div>
        
        
        `)
        console.log(quiz)
        $(`#questionsRow`).append(question);
    }
}
generateQuestion();

//need a way to tell what button was clicked on
  //event listener .on("click")
  //we need a unique identifier to click on
  //we need to get the value of what was clicked on
  //see if it was correct
  //loop over each option and see if it was right
  //alsert right answer and say if it was correct or not
  //wait a few seconds and go to next answer
  $("#questionsRow").on("click", `#option`, function() {
      console.log($(this).text());
      if (currentQuestion < quiz.length){
        //   I do not understand this (below)
        var userGuess = $(this).text().trim();
        console.log(userGuess)
            if (userGuess == quiz[currentQuestion].correctAnswer){
            alert("Correct");
            currentQuestion++;
            generateQuestion();
    }else{
        alert("YOU'R WRONG, the Correct answer is " + quiz[currentQuestion].correctAnswer )
        currentQuestion++
        generateQuestion();
    }
      
  }})


  
  function startTimer (){
    timerId = setInterval(timer, 1000);
  }
  
  function timer() {
    timerCount--;
    $('#timer').text(timerCount)
    if(timerCount == 0){
      timerCount = 10;
      clearInterval(timerId)
      alert('Times Up the Answer was: ' + quiz[currentQuestion].correctAnswer)
      currentQuestion++
       generateQuestion()
       startTimer()
    }
  }

  function endGame() {
      if (currentQuestion = )
  }
  
 