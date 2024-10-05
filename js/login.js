async function fetchPasswords() {
    try {
        const response = await fetch('https://sheetdb.io/api/v1/f6stdqjfoe7ln');
        const data = await response.json();
        console.log('Dados recebidos da API:', data); // Adicionado para depuração

        const passwords = {};
        data.forEach(user => {
            passwords[user.email] = user.senha;
        });

        return passwords;
    } catch (error) {
        console.error('Erro ao buscar senhas:', error);
        return null;
    }
}

async function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const passwords = await fetchPasswords();
    if (!passwords) {
        alert('Erro ao buscar senhas. Tente novamente.');
        return;
    }

    const passwordRenata = passwords['renata.c.olivio@gmail.com'];
    const passwordMarcelo = passwords['marcelogamboa.sp@gmail.com'];

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