const questions = [
    {
        question: "Who developed Python Programming Language?",
        answers:[
            {text: "Wick van Rossum", correct: false},
            {text: " Rasmus Lerdorf", correct: false},
            {text: " Guido van Rossum", correct: true},
            {text: "Niene Stom", correct: false},
        ]
    },
    {
        question: "All keywords in Python are in _________",
        answers:[
            {text: " Capitalized", correct: false},
            {text: "lower case", correct: false},
            {text: "UPPER CASE", correct: false},
            {text: "None of the mentioned", correct: true},
        ]
    },
    {
        question: "Which keyword is used for function in Python language?",
        answers:[
            {text: "Indentation", correct: true},
            {text: " Key", correct: false},
            {text: " Brackets", correct: false},
            {text: "All of the mentioned", correct: false},
        ]
    },
    {
        question: "Which of the following functions can help us to find the version of python that we are currently working on?",
        answers:[
            {text: "sys.version(1)", correct: false},
            {text: "sys.version(0)", correct: false},
            {text: "sys.version()", correct: false},
            {text: "sys.version", correct: true},
        ]
    },
    {
        question: " Python supports the creation of anonymous functions at runtime, using a construct called __________",
        answers:[
            {text: "pi", correct: false},
            {text: "anonymous", correct: false},
            {text: "lambda", correct: true},
            {text: "Noe of the mentioned", correct: false},
        ]
    },
    {
        question: "Which of the following is true for variable names in Python?",
        answers:[
            {text: "underscore and ampersand are the only two special characters allowed", correct: false},
            {text: "unlimited length", correct: true},
            {text: "all private members must have leading and trailing underscores", correct: false},
            {text: "none of the mentioned", correct: false},
        ]
    },
    {
        question: "Which of the following is the use of id() function in python?",
        answers:[
            {text: "Every object does not have a unique id", correct: false},
            {text: "Id returns the identity of the object", correct: true},
            {text: "All of the mentioned", correct: false},
            {text: "None of the mentioned", correct: false},
        ]
    },
    {
        question: " Which of the following functions is a built-in function in python?",
        answers:[
            {text: "factorial()", correct: false},
            {text: "print()", correct: true},
            {text: "seed()", correct: false},
            {text: "sqrt()", correct: false},
        ]
    },
    {
        question: "What is the order of namespaces in which Python looks for an identifier? ",
        answers:[
            {text: "Python first searches the built-in namespace, then the global namespace and finally the local namespace", correct: false},
            {text: "Python first searches the built-in namespace, then the local namespace and finally the global namespace", correct: false},
            {text: "Python first searches the local namespace, then the global namespace and finally the built-in namespace", correct: true},
            {text: "Python first searches the global namespace, then the local namespace and finally the built-in namespace", correct: false},
        ]
    },
    {
        question: "To add a new element to a list we use which Python command?",
        answers:[
            {text: "list1.addEnd(5)", correct: false},
            {text: "list1.addLast(5)", correct: false},
            {text: "list1.append(5)", correct: true},
            {text: "list1.add(5)", correct: false},
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