// Adiciona um ouvinte de evento ao formulário para interceptar o envio
document.getElementById('gastos-ganhos-form').addEventListener('submit', function(event) {
    // Impede o comportamento padrão de envio do formulário
    event.preventDefault(); 

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
        body: JSON.stringify(dados) // Converte os dados do formulário para JSON
    })
    .then(response => response.json()) // Converte a resposta da API para JSON
    .then(data => {
        // Exibe uma mensagem de sucesso ou erro baseado na resposta da API
        console.log('Sucesso:', data);
        alert('Transação registrada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao registrar a transação.');
    });
});