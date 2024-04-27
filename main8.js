let h2 = document.getElementsByTagName('h2')[0]
let num = localStorage.getItem('num')
h2.innerText=`Your score is : ${num}/7`

let next = document.getElementById('next')

function goToMainFn(){
    location.href=`index.html`
}

next.addEventListener('click',goToMainFn)

















