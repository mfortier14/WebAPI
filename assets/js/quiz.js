var correctAnswer = "Correct!"
  var wrongAnswer = "Try Again!"
  var questionA1 = $("quizdisplay");
  var currentQuestionIndex = 0;
  var titleA1 = $("question");
  var choicesA1 = $("choice");



// this will set the timer to 60 when the start quiz button is clicked and decrement the timer
  var timer = 60;
  var IntervalId;
  var Clock = $("timer");
  $("quiz").on("click", function() {
      Clock.style.display = "block";
      IntervalId = setInterval(decrement, 1000);
      showQuestion();
  });
  
  function decrement() {
    timer--;
    Clock.textContent = timer;
    if (timer === 0) {
      clearInterval(IntervalId);
      // need more code here 
    }
  }

  var i = 0;
  
  function showQuestion() {
    // questions.show();
    
    $("#question").text(questions[i]["title"]);
    $(".choice").text(questions[i]["choices"][0]);
    $(".choice").text(questions[i]["choices"][1]);
    $(".choice").text(questions[i]["choices"][2]);
    $(".choice").text(questions[i]["choices"][3]);
    console.log(questions[i]);
    // the questions and answers from the array will display
   };

  var Score = 0;

  $("#quiz").on("click", function(){
    $("#quizDisplay").show();
    $(".buttons").show();
    console.log("#quizDisplay");
    showQuestion();
    // if they click the start quiz button, the first question will appear
  });
  
// $(".buttons").on("click", function(){
//     var btnResponse = $(this.text(questions[i]));
// })

function startQuiz() {
    // hide the first question on the first screen
    var startMessage = $("#message");
    startMessage.attr("class", "hide");
  
    // show the questions that were hidden
    questionAl.removeAttribute("class");

    getQuestion();
}  

function getQuestion() {
    // get current question object from array
    var currentQuestion = quizdisplay[currentQuestionIndex];
  
    // update title with current question
    var titleAl = $("question");
    titleAl.text = currentQuestion.title;
  
    // clear out any old question choices
    choicesAl.innerHTML = "";
  
    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
      // create new button for each choice
      var choiceItem = $("button");
      choiceItem.attr("class", "choice");
      choiceItem.attr("value", choice);
  
      choiceNode.text = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      choicesAl.append(choiceNode);
    })};