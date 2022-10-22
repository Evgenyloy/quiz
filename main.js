const quizQuestion = document.querySelector('.quiz__question');//headercontainer
const quizAnswers = document.querySelector('.quiz__answers');//listcontainer
const submitButton = document.querySelector('.quiz__button');
const quiz = document.querySelector('.quiz');
const quizHeader = document.querySelector('.quiz__header');


const questions = [
    {
        question: 'How many lives does a cat have?',
        answer: ['one', 'four', 'seven', 'nine'],
        correct: 4,
    },
    {
        question: 'What brand of beer does Homer Simpson drink?',
        answer: ['Duff Beer', 'Ohota svetloe', 'Miller', 'Samuel Adams'],
        correct: 1,
    },
    {
        question: 'How many wisdom teeth does the average adult have?',
        answer: [12, 1, 4, 6],
        correct: 3,
    },
    {
        question: 'How many rings is the Olympic symbol made up of?',
        answer: [10, 12, 6, 5],
        correct: 4,
    },
    {
        question: 'Whats the biggest animal in the world?',
        answer: ['The blue whale', 'elephant', 'giraffe', 'hippo'],
        correct: 1,
    },
];

let score = 0;
let questionIndex = 0;

function showQuestion() {

    const headerTempate = `<div class="quiz__question">${questions[questionIndex]['question']}</div>`;
    quizHeader.innerHTML = headerTempate;

    const questionTemplate = `
<li class="quiz__answer-item">
    <input class="quiz__radio" type="radio" id="1" name="quiz">
    <label class="quiz__input-text" for="1">${questions[questionIndex].answer[0]}</label>
</li>

<li class="quiz__answer-item">
    <input class="quiz__radio" type="radio" id="2" name="quiz">
    <label class="quiz__input-text" for="2">${questions[questionIndex].answer[1]}</label>
</li>

<li class="quiz__answer-item">
    <input class="quiz__radio" type="radio" id="3" name="quiz">
    <label class="quiz__input-text" for="3">${questions[questionIndex].answer[2]}</label>
</li>

<li class="quiz__answer-item">
    <input class="quiz__radio" type="radio" id="4" name="quiz">
    <label class="quiz__input-text" for="4">${questions[questionIndex].answer[3]}</label>
</li>`


    quizAnswers.innerHTML = questionTemplate;

}
showQuestion();


submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    let checkedRadio = quizAnswers.querySelector('input:checked');

    if (!checkedRadio) {
        return;
    };

    if (checkedRadio.id == questions[questionIndex].correct) {
        score = score + 1;
    };

    if (questionIndex !== questions.length - 1) {
        questionIndex = questionIndex + 1;
        showQuestion();
    } else {
        questionIndex = 0;
        clearField();
        showResults();
    }


}

function clearField() {
    quizAnswers.innerHTML = '';
    quizHeader.innerHTML = '';
}

function showResults() {
    let title, message;


    if (score === questions.length) {
        title = 'Congratulations!';
        message = 'You answered all questions correctly!';
    } else if ((score * 100) / questions.length >= 50) {
        title = 'Not a bad result!';
        message = 'You have given more than half of the correct answers!';
    } else {
        title = 'Worth a try!';
        message = 'Your answers are less than half correct!';
    }


    const resultsTemplate = `
    <div class="title">${title}</div>
    <div class="message">${message}</div>
    <div class="result">${score} из 5</div>`;

    quizAnswers.innerHTML = resultsTemplate;

    submitButton.textContent = 'Start over'
    submitButton.onclick = () => history.go();

}














