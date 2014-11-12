# -*- encoding: utf-8 -*-

from const import *
import json
from flask import Flask, url_for, render_template, request

app = Flask(__name__)


@app.route('/')
def lift():
    ''' Bro, do you even? '''

    # TODO: replace test.mp3 with fully loaded list
    audio_url = url_for('static', filename='audio/test.mp3')
    things = list(FLOORS) + list(MOVEMENT) + list(DOORS)

    # creates audio files names, returns the url for them
    url_root = request.url_root[:-1]  # because we end with /
    audio_files = ["%s.mp3" % thing.lower().replace(" ", "_") for thing in things]
    audio_files = [url_root + url_for('static', filename='audio/%s' % audio) for audio in audio_files]

    return render_template(
        'index.html',
        audio_url=url_root + audio_url,
        things=json.dumps(things),
        audio_things=json.dumps(audio_files))