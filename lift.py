# -*- encoding: utf-8 -*-

from const import *
import json
from flask import Flask, url_for, render_template

app = Flask(__name__)


@app.route('/')
def lift():

    css_url = url_for('static', filename='style.css')
    js_url = url_for('static', filename='script.js')
    things = list(FLOORS) + list(MOVEMENT) + list(DOORS)

    return render_template(
        'index.html',
        css_url=css_url,
        js_url=js_url,
        things=json.dumps(things))