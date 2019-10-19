var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store:",
        choices: ["number and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parantheses"],
        answer: "curly brackets"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "for loops"
    }
  ];

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
    $(".responseOne").text(questions[i]["choices"][0]);
    $(".responseTwo").text(questions[i]["choices"][1]);
    $(".responseThree").text(questions[i]["choices"][2]);
    $(".responseFour").text(questions[i]["choices"][3]);
    console.log(questions[i]);
   };

  var Score = 0;

  $("#quiz").on("click", function(){
    $("#questionDisplay").show();
    console.log("#questionDisplay");
    showQuestion();
  })
