const button = document.getElementById('button');

// const para mudar o botão de enviar para imagem
const addLoading = () => {
    button.innerHTML = '<img src="./images/loading.png" class="loading">';
}

// const para mudar o botão de enviar para imagem
const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
    event.preventDefault(); 
    addLoading()

    // Coleta os valores dos campos do formulário
    const tipo = document.getElementById('tipo').value; // Tipo de transação (ganho ou gasto)
    const descricao = document.getElementById('descricao').value;   // Descrição da transação
    const valor = document.getElementById('valor').value;   // Valor da transação (em R$)
    const data = document.getElementById('data').value; // Data da transação
    
    // Cria um objeto com os dados que serão enviados
    const dados = {
        data: [
            {
            tipo: tipo,
            descricao: descricao,
            valor: valor,
            data: data
            }
        ]
    };

    // Usa o método fetch para enviar os dados via POST para a API
    fetch('https://sheetdb.io/api/v1/f6stdqjfoe7ln', {
        
        method: 'POST', // Método HTTP POST
        headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
        },
        body: JSON.stringify(dados) // Converte as informações do formulário para JSON
    })
    .then(() => {
        removeLoading();
        alert('Transação registrada com sucesso!');
    })
    .catch(() => {
        alert('Ocorreu um erro ao registrar a transação.');
    });

    document.getElementById('gastos-ganhos-form').reset();
}

document.getElementById('gastos-ganhos-form').addEventListener('submit', handleSubmit);