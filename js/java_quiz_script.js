const questions = [
    {
        question: "Who invented Java Programming?",
        answers:[
            {text: "Guido van Rossum", correct: false},
            {text: "James Gosling", correct: true},
            {text: "Dennis Ritchie", correct: false},
            {text: "Bjarne Stroustrup", correct: false},
        ]
    },
    {
        question: "Select all the core concepts of OOPS.",
        answers:[
            {text: "Abstraction", correct: false},
            {text: " Inheritance", correct: false},
            {text: "Polymorphism", correct: false},
            {text: " all the above", correct: true},
        ]
    },
    {
        question: "Which of the following statements are true for inheritance in Java?",
        answers:[
            {text: "The “extend” keyword is used to extend a class in java.", correct: false},
            {text: "You can extend multiple classes in java.", correct: false},
            {text: "Private members of the superclass are accessible to the subclass.", correct: false},
            {text: " We cannot extend Final classes in java.", correct: true},
        ]
    },
    {
        question: "Which of the below are unchecked exceptions in java?",
        answers:[
            {text: "RuntimeException", correct: false},
            {text: "ClassCastException", correct: false},
            {text: " NullPointerException", correct: false},
            {text: "all the above", correct: true},
        ]
    },
    {
        question: "Which of the below are built-in class loaders in java?",
        answers:[
            {text: "Bootstrap Class Loader", correct: false},
            {text: " Extensions Class Loader", correct: false},
            {text: "System Class Loader", correct: false},
            {text: "all the above", correct: true},
        ]
    },
    {
        question: "Which of the below are reserved keyword in Java?",
        answers:[
            {text: " array", correct: false},
            {text: "goto", correct: true},
            {text: "  null", correct: false},
            {text: "int", correct: true},
        ]
    },
    {
        question: "What are the valid statements for static keyword in Java?",
        answers:[
            {text: " We can have static block in a class.", correct: true},
            {text: "The static block in a class is executed every time an object of class is created.", correct: false},
            {text: "We can have static method implementations in interface.", correct: true},
            {text: "We can define static block inside a method.", correct: false},
        ]
    },
    {
        question: " Which component is used to compile, debug and execute the java programs?",
        answers:[
            {text: "JRE", correct: false},
            {text: "JIT", correct: false},
            {text: "JDK", correct: true},
            {text: "JVM", correct: false},
        ]
    },
    {
        question: "What is not the use of “this” keyword in Java?",
        answers:[
            {text: "Referring to the instance variable when a local variable has the same name", correct: false},
            {text: "Passing itself to the method of the same class", correct: true},
            {text: "Passing itself to another method", correct: false},
            {text: "Calling another constructor in constructor chaining", correct: false},
        ]
    },
    {
        question: "Which environment variable is used to set the java path?",
        answers:[
            {text: "MAVEN_Path", correct: false},
            {text: "JavaPATH", correct: false},
            {text: "JAVA", correct: false},
            {text: "JAVA_HOME", correct: true},
        ]
    },
    

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML= questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    if(score<questions.length){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Try Again";
        nextButton.style.display = "block";
    }
    else{
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}.Keep it up....`;
    }
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();