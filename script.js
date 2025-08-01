let actAnswer = 0;
let score = 0;
const question = document.querySelector("#question");
const form = document.querySelector("#form");
const btn = document.querySelector("#primaryBtn");
const userScore = document.querySelector("span");
const ans = document.querySelector("#answerInput");
const msg = document.querySelector(".msg");
const randomNumGenrate = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const generateQuestion = () => {
    let randQuestion;
    let randNum1 = randomNumGenrate(1, 10);
    let randNum2 = randomNumGenrate(1, 10);
    const questionType = randomNumGenrate(1, 4);

    if (randNum2 > randNum1 && questionType > 2) {
        let temp = randNum2;
        randNum2 = randNum1;
        randNum1 = temp;
    }
    switch (questionType) {
        case 1:
            randQuestion = `Q. What is ${randNum1} multiply ${randNum2}?`;
            actAnswer = randNum1 * randNum2;
            break;
        case 2:
            randQuestion = `Q. What is ${randNum1} add ${randNum2}?`;
            actAnswer = randNum1 + randNum2;
            break;
        case 3:
            randQuestion = `Q. What is ${randNum1} subtract ${randNum2}?`;
            actAnswer = randNum1 - randNum2;
            break;
        case 4:
            randQuestion = `Q. What is ${randNum1} divide ${randNum2}?`;
            actAnswer = Math.floor(randNum1 / randNum2);
            break;
        default:
            break;
    }
    return ({ randQuestion, actAnswer });
};

const showQuestion = () => {
    const { randQuestion, actAnswer } = generateQuestion();
    question.innerText = randQuestion;
};

showQuestion()
const check = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userAns = +formData.get("answer")
    if (userAns === actAnswer) {
        score += 1;
      Toastify({
    text: "✅ Correct",
    duration: 1000,
    gravity: "top", 
    position: "center", 
    backgroundColor: "red", 
    
  }).showToast();  
    }
    else {
        score -= 1;
        Toastify({
    text: "❌ Incorrect",
    duration: 1000,
    gravity: "top", 
    position: "center", 
    backgroundColor: "black", 
    
  }).showToast(); 
    }
    event.target.reset()
    userScore.innerText = score;
    showQuestion()
}
