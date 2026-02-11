function magic8ball() {
    var fortune = getafortune();
    showfortune(fortune)
}

function getafortune() {
    var fortunes = ["yes twin", "eh, try to manifest it", "absolutely", "the chances are looking good", "no L", "no sorry dude", "don't bet on it", "absolutely not bro", "maybe, maybe not", "ask again dawg", "probably?", "who knows",]
    var random = rando(fortunes.length)
    return fortunes[random];

}

function rando(max) {
    var lessthan_number = Math.random() * max
    return Math.floor(lessthan_number) 
}

function showfortune(fortune) {
    //alert(fortune); 
    document.getElementById("Answer").innerHTML = fortune;

}