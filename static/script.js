var div = document.getElementById('shit'),
    play_status = document.getElementById('play_status'),
    audio = new Audio(),
    timer = 10000,
    play_class_glyph = 'icon-volume-up',
    mute_class_glyph = 'icon-volume-off';

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

        if (play_status.className === play_class_glyph) {
            audio.src = audio_things[thing];
            audio.pause();
            audio.load();
            audio.play();
        }
    }, timer);
}

function mute_sounds(){
    var is_muted = (play_status.className === mute_class_glyph) ? true : false;
    play_status.className = (is_muted === false) ? mute_class_glyph : play_class_glyph;
    if (is_muted === true) { audio.pause(); audio.src = ''; }
}
play_status.addEventListener('click', function (event) { mute_sounds(); event.preventDefault(); });
