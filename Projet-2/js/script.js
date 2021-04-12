const colors = ['black', 'white', 'blue', 'yellow', 'pink', 'green']; 
var random_color;
const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click',() => {     
         random_color = Math.floor(Math.random() * colors.length);
         body.style.backgroundColor  = colors[random_color]; 
console.log(color);
})