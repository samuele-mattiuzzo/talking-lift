function scramble(){
    // Picks a random number
    return Math.floor(Math.random() * things.length);
}

function talking_lift(){
    var thing,
        div,
        audio = document.getElementById('audio');

    setInterval(function(){
        
        // Picks a random sentence, writes it in the div
        // Plays the corresponding sound (TODO: replace test with proper)
        thing = scramble();
        div = document.getElementById(span_id);
        div.innerHTML = things[thing];
        audio[thing].play();

    }, timer);
}

function mute_sounds(){}
function enable_sounds(){}