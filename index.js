const cardList= document.querySelector(`.cardList`)
buildBoard();

function  addCard(value){
    let card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML=value;
    cardList.appendChild(card);
}
function buildBoard(){
    for(let i=0;i<12;i++){
        addCard('starter')
    }
}
cardList.addEventListener('click',function (e){
    console.log(e.target);
    if(e.target.matches('.cardList')){
        return
    }
    if(e.target.classList.contains('active')){

    }
})