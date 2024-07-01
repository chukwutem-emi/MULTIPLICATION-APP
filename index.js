const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const correctAnswer = num1 * num2;

const questionEl = document.getElementById("question");
questionEl.innerText = `what is ${num1} multiply by ${num2}?`

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

scoreEl.innerText = `score ${score}`

if (!score) {
    score = 0;
}
const inputEl = document.getElementById("input");


const formEl = document.getElementById("form");

formEl.addEventListener("submit", () => {
    const userAnswer = parseInt(inputEl.value)
    if (userAnswer === correctAnswer){
        score = score + 1;
        updateLocalStorage()
    } else {
        score -= 1;
       updateLocalStorage()
    }
});
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

