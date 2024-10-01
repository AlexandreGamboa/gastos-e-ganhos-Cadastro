function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const validEmails = ['renata.c.olivio@gmail.com', 'marcelogamboa.sp@gmail.com'];
    const validPassword = '123456';

    if (validEmails.includes(email) && password === validPassword) {
        window.location.href = 'cadastro.html';
    } else {
        alert('Email ou senha incorretos.');
        document.getElementById('login-form').reset();
    }
}