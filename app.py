from flask import Flask, render_template, session, redirect, url_for, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
    if 'loggedin' in session:
        return redirect(url_for('index'))
    return render_template('login.html')

if __name__ == "__main__":
    app.run(debug=True)