from flask import Flask, render_template, request, redirect, url_for, session, flash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        # Replace this with your actual authentication logic
        if email == 'admin@example.com' and password == 'password':
            session['user'] = email
            flash('Login successful!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Invalid credentials, please try again.', 'error')
    return render_template('login.html')

# Logout route
@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out.', 'info')
    return redirect(url_for('home'))

# Profile route (example placeholder)
@app.route('/profile')
def profile():
    if 'user' in session:
        return f"Welcome {session['user']} to your profile!"
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
