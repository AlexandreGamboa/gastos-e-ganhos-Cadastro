const button = document.getElementById('buttonSenha');

// const para mudar o botão de enviar para imagem
const addLoading = () => {
    button.innerHTML = '<img src="../images/loading.png" class="loading">';
}

// const para mudar o botão de enviar para imagem
const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

document.getElementById('resetForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio do formulário

    addLoading();

    const confirmEmail = document.getElementById('confirmEmail').value;
    const passwordAntigo = document.getElementById('passwordAntigo').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        try {
            // Faz uma solicitação GET para obter a senha atual
            const response = await fetch(`https://sheetdb.io/api/v1/f6stdqjfoe7ln/search?email=${confirmEmail}`);
            const data = await response.json();

            console.log('Dados recebidos da API:', data); // Adicionado para depuração

            if (data.length > 0) {
                const user = data[0];
                console.log('Usuário encontrado:', user); // Adicionado para depuração

                if (user.senha === passwordAntigo) {
                    // Verifica o email e atualiza a senha específica
                    let updateUrl = '';
                    if (confirmEmail === 'renata.c.olivio@gmail.com') {
                        updateUrl = `https://sheetdb.io/api/v1/f6stdqjfoe7ln/email/${confirmEmail}`;
                    } else if (confirmEmail === 'marcelogamboa.sp@gmail.com') {
                        updateUrl = `https://sheetdb.io/api/v1/f6stdqjfoe7ln/email/${confirmEmail}`;
                    }

                    console.log('URL de atualização:', updateUrl); // Adicionado para depuração

                    if (updateUrl) {
                        const updateResponse = await fetch(updateUrl, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ senha: newPassword })
                        });

                        if (updateResponse.ok) {
                            alert('Senha alterada com sucesso.');
                            removeLoading();
                            document.getElementById('resetForm').reset();
                        } else {
                            alert('Erro ao atualizar a senha. Tente novamente.');
                            removeLoading();
                        }
                    } else {
                        alert('Email não encontrado.');
                        removeLoading();
                    }
                } else {
                    alert('Senha atual inválida.');
                    removeLoading();
                }
            } else {
                alert('Email não encontrado.');
                removeLoading();
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao verificar a senha. Tente novamente.');
            removeLoading();
        }
    } else {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        removeLoading();
    }
});