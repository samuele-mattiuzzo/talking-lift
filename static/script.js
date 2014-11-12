var div = document.getElementById('shit'),
    audio = document.getElementById('audio'),
    play_status = document.getElementById('play_status'),
    timer = 5000;

function scramble(){
    // Picks a random number
    return Math.floor(Math.random() * things.length);
}

function talking_lift(){
    setInterval(function(){
        // Picks a random sentence, writes it in the div
        // Plays the corresponding sound
        thing = scramble();
        div.innerHTML = things[thing];
        //audio[thing].play();

    }, timer);
}

function mute_sounds(){
    var is_muted = (play_status.className === 'mute') ? true : false;
    //audio.forEach(function(audio_element) { audio_element.muted = !is_muted; });
    play_status.className = (is_muted === false) ? 'mute' : 'play';
}
play_status.addEventListener('click', function (event) {
  mute_sounds();
  event.preventDefault();
});
