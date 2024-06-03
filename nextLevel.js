const cardList= document.querySelector(`.cardList`)
const score = document.createElement('p')
const scoreboard= document.getElementById('sBoard');
const allpoints = document.getElementById('game-over')
let number = 0
score.innerHTML=`Your Score:`+ number
scoreboard.appendChild(score)
score.style.color="white"

function  addCard(value){
    let card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML=value;
    cardList.appendChild(card);
}

function buildBoard(){
    for(let i=0;i<12;i++){
        addCard('click')
    }
}
buildBoard();
let interval = setInterval(function () {
    addCard('click',cardList.children.length + 1)//make it start ar 1 not 0
}, 1000);

cardList.addEventListener('click',function (e){
    console.log(e.target);
    if(e.target.matches('.cardList')){
        return
    }
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        return
    }
    if(e.target.classList.contains('inactive')){
        e.target.remove();
        number= addNumber(number)
        score.remove()
        score.innerHTML=`Your Score:` + number
        score.style.color='sliver'
        scoreboard.appendChild(score)
    }
    if(e.target.classList.contains('late')){
        e.target.remove()
        number = subNumber(number)
        score.innerHTML=`Your Score:` + number
        score.style.color="white"
    }

    let children = cardList.children;
    if(children.length<1){
        clearInterval(interval)
        interval=null
        let points= document.createElement('h1')
        points.innerHTML=`YOU BEAT THE GAME  `
        points.style.color="white"
        let scores = document.createElement('h2')
        scores.innerHTML=`You Got `+ number+ ` Points`
        scores.style.color="white"
        score.remove()
        allpoints.appendChild(points)
        allpoints.appendChild(scores)
    }



})
function  addNumber(number){
    return number + 1
}
function  subNumber(number){
    return number - 1
}