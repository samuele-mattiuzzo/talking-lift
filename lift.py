# -*- encoding: utf-8 -*-
import json
import random

from const import *
from datetime import date
from flask import Flask, render_template, request, url_for

app = Flask(__name__)



def _to_audio_links(things):
    # creates audio files names, returns the url for them
    url_root = request.url_root[:-1]  # because we end with /
    audio_files = ["%s.mp3" % thing.lower().replace(" ", "_") for thing in things]
    audio_files = [url_root + url_for('static', filename='audio/%s' % audio) for audio in audio_files]
    return audio_files


@app.route('/')
def lift():
    ''' Bro, do you even? '''

    things = list(FLOORS) + list(MOVEMENT) + list(DOORS)
    audio_files = _to_audio_links(things)

    return render_template(
        'index.html',
        things=json.dumps(things),
        audio_things=json.dumps(audio_files),
        year=date.today().year)


@app.route('/random')
def random_lift():
    ''' Used to get a random mp3 file for external calls '''
    things = list(FLOORS) + list(MOVEMENT) + list(DOORS)
    audio_files = _to_audio_links(things)
    rnd = random.randint(0, len(audio_files))
    return audio_files[rnd]
