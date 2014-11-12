
function scramble(){
    return things[Math.floor(Math.random() * things.length)];
}

function talking_lift(){
    setInterval(function(){
        var thing,
            div;
        
        thing = scramble();
        div = document.getElementById('shit');
        div.innerHTML = thing;

    }, 15000);
}
