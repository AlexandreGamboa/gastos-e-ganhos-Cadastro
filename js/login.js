function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const passwordRenata = localStorage.getItem('passwordRenata');
    const passwordMarcelo = localStorage.getItem('passwordMarcelo');

    console.log('Senha Renata:', passwordRenata);
    console.log('Senha Marcelo:', passwordMarcelo);

    if (email === 'renata.c.olivio@gmail.com') {
        if (password === passwordRenata) {
            window.location.href = './cadastro.html';
        } else {
            alert('Email ou senha incorretos.');
            document.getElementById('loginForm').reset();
        }
    } else if (email === 'marcelogamboa.sp@gmail.com') {
        if (password === passwordMarcelo) {
            window.location.href = './cadastro.html';
        } else {
            alert('Email ou senha incorretos.');
            document.getElementById('loginForm').reset();
        }
    } else {
        alert('Email ou senha incorretos.');
        document.getElementById('loginForm').reset();
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateLogin();
});
