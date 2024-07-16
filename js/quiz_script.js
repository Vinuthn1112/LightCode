const questions = [
    {
        question: "Which SQL function is used to count the number of rows in a SQL query?",
        answers:[
            {text: "COUNT()", correct: false},
            {text: "NUMBER()", correct: false},
            {text: "SUM()", correct: false},
            {text: "COUNT(*)", correct: true},
        ]
    },
    {
        question: "In SQL, which of following is an aggregate function?",
        answers:[
            {text: "Avg", correct: true},
            {text: "Selet", correct: false},
            {text: "Ordered by", correct: false},
            {text: "Distinct", correct: false},
        ]
    },
    {
        question: "Which SQL keyword is used to retrieve a maximum value?",
        answers:[
            {text: "MOST", correct: false},
            {text: "TOP", correct: false},
            {text: "MAX", correct: true},
            {text: "UPPER", correct: false},
        ]
    },
    {
        question: " ___________removes all rows from a table without logging the individual row deletions.",
        answers:[
            {text: "DELETE", correct: false},
            {text: "DROP", correct: false},
            {text: "REMOVE", correct: false},
            {text: "TRUNCATE", correct: true},
        ]
    },
    {
        question: "Which of the following is not a DDL command?",
        answers:[
            {text: "UPDATE", correct: true},
            {text: "TRUNCATE", correct: false},
            {text: "ALTER", correct: false},
            {text: "Noe of the mentioned", correct: false},
        ]
    },
    {
        question: "A SQL command changes one or more fields of a table:",
        answers:[
            {text: "LOOK-UP", correct: false},
            {text: "INSERT", correct: false},
            {text: "CHANGE", correct: false},
            {text: "MODIFY", correct: true},
        ]
    },
    {
        question: "Consider the primary keys P and R in r1(P, Q, R) and r2(R, S, T). The relation r1 has 2000 tuples and the relation r2 has 2500 tuples. The join r1 and r2 can be as large as:",
        answers:[
            {text: "2000", correct: true},
            {text: "2500", correct: false},
            {text: "4500", correct: false},
            {text: "5000", correct: false},
        ]
    },
    {
        question: "Which of the following statements is/are true? ",
        answers:[
            {text: "An SQL query automatically eliminates the duplicates", correct: false},
            {text: "An SQL query will fail if there are no indexes on the relations", correct: false},
            {text: "SQL permits attribute names to be repeated in the same relation", correct: false},
            {text: "None of the above", correct: true},
        ]
    },
    {
        question: "Null values are viewed as unknown in SQL, and comparisons with null values are treated as unknown. Assume that all comparisons with a null value are false. Which of the following pairings does not have the same meaning? ",
        answers:[
            {text: "x = 5 AND not(not(x = 5))", correct: false},
            {text: "x = 5 AND x> 4 and x < 6, where x is an integer", correct: false},
            {text: "x not equal to 5 AND not (x = 5)", correct: true},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "In SQL, the select operation is identical to",
        answers:[
            {text: "the selection operation in relational algebra", correct: false},
            {text: "the selection operation in relational algebra, except that select in SQL retains duplicates", correct: false},
            {text: "the projection operation in relational algebra", correct: false},
            {text: "the projection operation in relational algebra, except that select in SQL keeps duplicates", correct: true},
        ]
    },
    {
        question: "Which of the following statement is true?",
        answers:[
            {text: "DELETE does not free the space containing the table and TRUNCATE free the space containing the table", correct: true},
            {text: "Both DELETE and TRUNCATE free the space containing the table", correct: false},
            {text: "Both DELETE and TRUNCATE does not free the space containing the table", correct: false},
            {text: "DELETE free the space containing the table and TRUNCATE does not free the space containing the table", correct: false},
        ]
    },
    {
        question: "The statement that is automatically run by the system as a result of the database modification is:",
        answers:[
            {text: "recovery", correct: false},
            {text: "trigger", correct: true},
            {text: "backup", correct: false},
            {text: "assertion", correct: false},
        ]
    },
    {
        question: "To remove a table in SQL, we use which of the following commands?",
        answers:[
            {text: "delete", correct: false},
            {text: "truncate", correct: false},
            {text: "remove", correct: false},
            {text: "drop", correct: true},
        ]
    },
    {
        question: "Which of the following statements about normal forms is incorrect?",
        answers:[
            {text: "The BCNF is more stringent than the 3NF.", correct: false},
            {text: "It is always feasible to decompose 3NF in a lossless, dependency-preserving manner.", correct: false},
            {text: "It is always possible to decompose BCNF in a lossless, dependency-preserving way.", correct: true},
            {text: "BCNF includes any two-attribute relationship.", correct: false},
        ]
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        answers:[
            {text: "Get", correct: false},
            {text: "Select", correct: true},
            {text: "Open", correct: false},
            {text: "Extract", correct: false},
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