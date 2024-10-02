document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const confirmEmail = document.getElementById('confirmEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        if (confirmEmail === 'renata.c.olivio@gmail.com') {
            localStorage.setItem('passwordRenata', newPassword);
            alert('Senha alterada com sucesso.');
            document.getElementById('resetForm').reset();

        } else if (confirmEmail === 'marcelogamboa.sp@gmail.com') {
            localStorage.setItem('passwordMarcelo', newPassword);
            alert('Senha alterada com sucesso.');
            document.getElementById('resetForm').reset();

        } else {
            alert('Email inválido.');
            document.getElementById('resetForm').reset();
        }

    } else {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        document.getElementById('resetForm').reset();
    }

    console.log('Senha Renata:', localStorage.getItem('passwordRenata'));
    console.log('Senha Marcelo:', localStorage.getItem('passwordMarcelo'));
});
