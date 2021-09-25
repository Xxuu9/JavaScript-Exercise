let greetings = ['Happy Birthday!','Merry Christmas my love',
'A happy Christmas to all the family','You\'re all I want for Christmas',
'Get well soon'];

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL', 'SooS']

function filterGreetings(){
    let result;
    for (let i = 0; i < greetings.length; i++) {
        if(greetings[i].indexOf('Christmas') !== -1){
            console.log(greetings[i]);
            let para = document.createElement('h1');
            result = greetings[i];
            para.textContent = result;
            document.body.appendChild(para);
            }
        }
}

function capitalization() {
    let lowerCityName;
    let upperFirstChar;
    let result;
    for (let i = 0; i < cities.length; i++) {
        lowerCityName = cities[i].toLowerCase();
        upperFirstChar = cities[i][0].toUpperCase();
        result = lowerCityName.replace(lowerCityName[0], upperFirstChar);
        // console.log(lowerCityName, upperFirstChar, result);
        let para = document.createElement('h1');
        para.textContent = result;
        document.body.appendChild(para);
    }

}


let btn1 = document.querySelector('.filterGreetings');
let btn2 = document.querySelector('.capitalization');

btn1.addEventListener('click', filterGreetings);
btn2.addEventListener('click', capitalization);


