let joke = "It was $temperature outside, so $name went for a walk." +
"When they got $place, they stared in horror for a few moments," +
"then turned into a slug and crawled away. $name saw the whole thing, " +
"but was not supprised-$name weights $weights, and it was a hot day.";
console.log(joke);

temperatures = ["94 fahrenheit", "34 centigrade"];
weights = ["300 pounds", "123 kg"];
peopleName = ["Big Daddy", "Willy the Gobin", "Father Christmas", "Bob"];
place = ["the White House", "the soup kitchen"]

console.log(joke.replace('$temperature', '94 fahrenheit'));

let newJoke = joke.replace('$name', peopleName[Math.floor(Math.random()*4)]);
newJoke = newJoke.replace('$name', peopleName[Math.floor(Math.random()*4)]);
newJoke = newJoke.replace('$name', peopleName[Math.floor(Math.random()*4)]);
console.log(newJoke);