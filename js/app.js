const questions = [
    {
        'que': 'Which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which year was JavaScript launched ?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hyper text markup language',
        'b': 'Cascading style sheet',
        'c': 'Json object notaion',
        'd': 'none of the above',
        'correct': 'b',
    }
];


let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const queHolder = document.getElementById('que');
const optionsHolder = document.querySelectorAll('.options');
//load questions in the UI
const questionsLoader = () => {

    if(index === total) {
        return endQuiz()
    }

    reset()

    const data = questions[index];
    queHolder.innerText = `${index+1}) ${data.que}`;
    optionsHolder[0].nextElementSibling.innerText = data.a;
    optionsHolder[1].nextElementSibling.innerText = data.b;
    optionsHolder[2].nextElementSibling.innerText = data.c;
    optionsHolder[3].nextElementSibling.innerText = data.d;
}

//Submiting quiz
const submitQuiz = () => {
    const data = questions[index];

    const ans = getAnswer();
    if(ans === data.correct) {
        right ++;
    } else {
        wrong++;
    }
    index++;
    questionsLoader();
    return;
}

//getting answer
const getAnswer = () => {
    let answer;
    optionsHolder.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

//resetting the form
const reset = () => {
    optionsHolder.forEach((input) => {
        input.checked = false;
    })
}

//end quiz after all the question finish
const endQuiz = () => {
    const box = document.getElementById('box');
    box.innerHTML = `
    <div style="text-align: center">
    <h3> Thank You for playing quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    </div>
    `
}
//initial call
questionsLoader();
