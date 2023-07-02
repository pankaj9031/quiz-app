const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
            
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false}
            
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
            
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
            
        ]
    },
    {
        question: "Which one is the smallest ocean in the World?",
        answers: [
            {text: "Indian", correct: false},
            {text: "Pacific", correct: false},
            {text: "Atlantic", correct: false},
            {text: "Arctic", correct: true}
            
        ]
    },
    {
        question: "In which ocean Bermuda Triangle region is located?",
        answers: [
            {text: "Atlantic", correct: true},
            {text: "Indian", correct: false},
            {text: "Pacific", correct: false},
            {text: "Arctic", correct: false}
            
        ]
    },
    {
        question: "Which country is also known as the 'Land of Rising Sun'?",
        answers: [
            {text: "Japan", correct: true},
            {text: "New Zealand", correct: false},
            {text: "Fiji", correct: false},
            {text: "China", correct: false}
            
        ]
    },
    {
        question: "Which continent has the highest number of countries?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
            {text: "North America", correct: false},
            {text: "Africa", correct: true}
            
        ]
    },
    {
        question: "Total number of oceans in the World is",
        answers: [
            {text: "3", correct: false},
            {text: "5", correct: true},
            {text: "7", correct: false},
            {text: "12", correct: false}
            
        ]
    },
    {
        question: "Which one is the longest continental mountain range in the world?",
        answers: [
            {text: "Himalaya", correct: false},
            {text: "Andes", correct: true},
            {text: "Rocky Mountains", correct: false},
            {text: "Ural Mountains", correct: false}
            
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
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
    const isCorrect = selectedBtn.dataset.correct === "true";
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
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
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