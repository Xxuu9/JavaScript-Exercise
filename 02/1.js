let array = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];
let myNewArray;
let myNewString;
    for(var i = 0; i < array.length; i++){
        //console.log(array[i], typeof(array[i]));
        myNewArray = array[i].split(':');
        //console.log(myNewArray[1], typeof(myNewArray));
        //myNewString = myNewArray[0] + '$' + myNewArray[1];
        myNewArray[1] =  '$'+ myNewArray[1];
        console.log(myNewArray);
        myNewString = myNewArray[0] + '-' + myNewArray[1];
        console.log(myNewString);
        myNewString = myNewArray.join('-');
        console.log(myNewString);
}


var list = document.querySelector('.output ul');
var input = document.querySelector('.output input');
var btn = document.querySelector('.output button');


let userInput = [];

function getUserInput(){

    userInput.push(input.value);
    console.log(userInput);
    if(userInput.length > 5){
        userInput.shift();
    }

    list.innerHTML = '';

  for(var i = 0; i < userInput.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent = userInput[i];
    list.appendChild(listItem);
}

}
btn.addEventListener('click', getUserInput);

