

var list = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
function fixing(){
    for(var i = 0; i < list.length; i++){
        
        var firstThreeLetters = list[i].slice(0,2);
        let semicolonNumber = list[i].indexOf(';');
        var stationName = list[i].slice(semicolonNumber+1);
        var input = firstThreeLetters +':' + stationName;
        var result = input;
        let para = document.createElement('h1');
        para.textContent = result;
        document.body.appendChild(para);
}
}

let btn = document.querySelector('.makeNewStrings');
btn.addEventListener('click',fixing);