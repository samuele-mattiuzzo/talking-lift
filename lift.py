import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def lift():

    css_url = url_for('static', filename='style.css')
    js_url = url_for('static', filename='script.js')
    says = []

    return render_template(
        'index.html',
        css_url=css_url,
        js_url=js_url,
        says=says)