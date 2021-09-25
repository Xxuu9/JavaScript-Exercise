
var list = document.querySelector('ul');


var list1 = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];


function fixing(){
    for(var i = 0; i < list1.length; i++){
        
        var firstThreeLetters = list1[i].slice(0,2);
        let semicolonNumber = list1[i].indexOf(';');
        var stationName = list1[i].slice(semicolonNumber+1);
        var input = firstThreeLetters +':' + stationName;
        var result = input;
        var listItem = document.createElement('li');
        listItem.textContent = result;
        list.appendChild(listItem);
}
}

let btn = document.querySelector('.makeNewStrings');
btn.addEventListener('click',fixing);