function scramble(){
    // Picks a random number
    return Math.floor(Math.random() * things.length);
}

function talking_lift(){
    var thing,
        div;

    setInterval(function(){
        
        // Picks a random sentence, writes it in the div
        // Plays the corresponding sound (TODO: replace test with proper)
        thing = scramble();
        div = document.getElementById(span_id);
        div.innerHTML = things[thing];

        // TODO: enable + replace this once audio files are ready
        //var audio = new Audio(audio_things[thing]);
        var audio = new Audio(audio_url);
        audio.play();

    }, timer);
}
