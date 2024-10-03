document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const confirmEmail = document.getElementById('confirmEmail').value;
    const passwordAntigo = document.getElementById('passwordAntigo').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const PRantigo = localStorage.getItem('passwordRenata');
    const PMantigo = localStorage.getItem('passwordMarcelo');

    if (newPassword === confirmPassword) {
        if (confirmEmail === 'renata.c.olivio@gmail.com' && passwordAntigo === PRantigo) {
            localStorage.setItem('passwordRenata', newPassword);
            alert('Senha alterada com sucesso.');
            document.getElementById('resetForm').reset();

        } else if (confirmEmail === 'marcelogamboa.sp@gmail.com' && passwordAntigo === PMantigo) {

            localStorage.setItem('passwordMarcelo', newPassword);
            alert('Senha alterada com sucesso.');
            document.getElementById('resetForm').reset();

        } else {
            alert('Email ou Senha atual inválido.');
            document.getElementById('resetForm').reset();
        }

    } else {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        document.getElementById('resetForm').reset();
    }

    console.log('Senha Renata:', localStorage.getItem('passwordRenata'));
    console.log('Senha Marcelo:', localStorage.getItem('passwordMarcelo'));
});
