var correctAnswer = "Correct!"
  var wrongAnswer = "Try Again!"


// this will set the timer to 60 when the start quiz button is clicked and decrement the timer
  var timer = 60;
  var IntervalId;
  var Clock = document.getElementById("timer");
  document.getElementById("quiz").addEventListener("click", function() {
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
