window.onload = function() {

    // arrays de excusas
    let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
    let what = ['eat', 'pissed', 'crushed', 'broked'];
    let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

    //variables random

    var random1 = Math.floor((Math.random() * who.length));
    var random2 = Math.floor((Math.random() * what.length));
    var random3 = Math.floor((Math.random() * when.length));


    document.querySelector('#excuse').innerHTML = who[random1] + " " + what[random2] + " " + when[random3];

}