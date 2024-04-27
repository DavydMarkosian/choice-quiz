let aBtn = document.getElementById('a')
let bBtn = document.getElementById('b')
let cBtn = document.getElementById('c')

let next = document.getElementById('next')

let q = document.getElementById('quantity')

q.innerText = `0/7`

let arrayOfBtns = []
arrayOfBtns.push(aBtn, bBtn, cBtn)

function check() {
    let result = 0

    for (const btn of arrayOfBtns) {

        if (this.className === 'correct') {
            this.classList.add('green')
            result++
            q.innerText = `${result}/7`
            cancelBtnFn()
            localStorage.setItem('num', result)
        }

        let correct = document.getElementsByClassName('correct')[0]

        if (this.className === 'wrong') {
            this.classList.add('red')
            correct.classList.add('green')
            cancelBtnFn()
            localStorage.setItem('num', result)

        }

    }

    next.addEventListener('click', nextFn)

}

function nextFn() {
    location.href = `index2.html`
    let number = JSON.parse(localStorage.getItem('num'))
    console.log(number)
}

aBtn.addEventListener('click', check)
bBtn.addEventListener('click', check)
cBtn.addEventListener('click', check)

function cancelBtnFn() {
    aBtn.classList.add('cancelBtn')
    bBtn.classList.add('cancelBtn')
    cBtn.classList.add('cancelBtn')
}















