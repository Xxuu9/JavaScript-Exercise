let greetings = ['Happy Birthday!','Merry Christmas my love',
'A happy Christmas to all the family','You\'re all I want for Christmas',
'Get well soon'];

function filterGreetings(){
for (let i = 0; i < greetings.length; i++) {
    if(greetings[i].indexOf('Christmas') !== -1){
    console.log(greetings[i]);
    let para = document.createElement('h1');
    para.textContent = greetings[i];
    document.body.appendChild(para);
}
}
}
let btn = document.querySelector('button');

btn.addEventListener('click',filterGreetings);


