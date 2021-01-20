const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red','yellow','green','pink','purple','blue']

body.style.background="violet"
button.addEventListener('click',changeBackgroundColor)

function changeBackgroundColor(){
    const colorIndex = parseInt(Math.random()*colors.length);
    console.log(parseInt(Math.random()*colors.length));
    body.style.background = colors[colorIndex]

}