const questions = [
    {
        question: "What does SQL stand for?",
        answers:[
            {text: "Strong Question Language", correct: false},
            {text: "Structured Question Language", correct: false},
            {text: "Structured Query Language", correct: true},
            {text: "Strong Query Language", correct: false},
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
        question: "Location transparency in distributed databases allows database users, programmers, and administrators to handle data as if it were stored in a single location. A SQL query with location transparency must provide the following information:",
        answers:[
            {text: "Fragments", correct: true},
            {text: "Locations", correct: false},
            {text: "Local formats", correct: false},
            {text: "Inheritances", correct: false},
        ]
    },
    {
        question: "Consider the following three SQL queries (assuming the 'persons' table has the data): (a)Select a name from people who are over the age of 21; (b)Select a name from people who are over the height of 180; (c)Select a name from people who are (over the age of 21) or (over the height of 180);. What is one probable number of rows returned by SQL query (c) if SQL queries (a) and (b) above produce 10 and 7 rows in the result set, respectively?",
        answers:[
            {text: "7", correct: false},
            {text: "3", correct: false},
            {text: "10", correct: true},
            {text: "21", correct: false},
        ]
    },
    {
        question: "STUDENT (Name, Gender, Marks, DEPT Name) is a relation that stores STUDENT information at a university. Consider the SQL Query below. SELECT DEPT Name from STUDENT where Gender = 'M'> GROUP BY DEPT_Name having avg(Marks)>SELECT avg (Marks) from STUDENT. It returns the Department Name for which:",
        answers:[
            {text: "The Average marks of Male students are more than the average marks of students in the same department", correct: false},
            {text: "The average marks of male students are more than the average marks of students in the University", correct: true},
            {text: "The average marks of male students are more than the average marks of male students in the University", correct: false},
            {text: "The average marks of students are more than the average marks of male students in the University", correct: false},
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
        question: "Consider the primary keys P and R in r1(P, Q, R) and r2(R, S, T). The relation r1 has 2000 tuples and the relation r2 has 2500 tuples. The join r1⋈ r2 can be as large as::",
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
        question: "________ is the number of rows that the SQL query will return.",
        answers:[
            {text: "0", correct: false},
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
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
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
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