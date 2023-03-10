const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Jel",
        b: "B",
        c: "Porch lights",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Coping Style Shoes",
        b: "Cascading Style Sheets",
        c: "Corrective Styling Sheets",
        d: "Cool Summer Scenes",
        correct: "b",
    },
    {
        question: "What is HTML spelled out?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Meeting Lanterns",
        d: "Heaters Terminals Mountains Lagoons",
        correct: "a",
    },
    {
       question: "What are variables in coding?",
       a: "Somebody who codes",
       b: "Something we can store information in",
       c: "A cool button",
       d: "none of the above",
       correct: "b", 
    },


]; 

const quiz= document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++ 
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHtml = `
            <h2> You answered ${score}/${quizData.Length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
    
        }
    }

})