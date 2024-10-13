document.addEventListener('DOMContentLoaded', function () {
    const tipoSelect = document.getElementById('tipo');
    const descricaoSelect = document.getElementById('descricao');

    const opcoesGanhos = [
        { value: 'Aluguel', text: 'Aluguel' },
        { value: 'Salário', text: 'Salário' },
        { value: 'Outro', text: 'Outro'}
    ];

    const opcoesGastos = [
        { value: 'Aluguel', text: 'Aluguel' },
        { value: 'Cabeleleiro', text: 'Cabeleleiro'},
        { value: 'Educação', text: 'Educação' },
        { value: 'Entretenimento', text: 'Entretenimento' },
        { value: 'informatica', text: 'informatica'},
        { value: 'Mesada', text: 'Mesada' },
        { value: 'Restaurante', text: 'Restaurante' },
        { value: 'Roupas e Calçados', text: 'Roupas e Calçados' },
        { value: 'Saúde', text: 'Saúde' },
        { value: 'Serviços diversos', text: 'Serviços diversos'},
        { value: 'Supermercado', text: 'Supermercado' },
        { value: 'Transporte', text: 'Transporte' },
        { value: 'Outro', text: 'Outro' }

    ];

    function atualizarOpcoes() {
        const tipo = tipoSelect.value;
        let opcoes = [];

        if (tipo === 'ganhos') {
            opcoes = opcoesGanhos;
        } else if (tipo === 'gasto') {
            opcoes = opcoesGastos;
        }

        descricaoSelect.innerHTML = '';
        opcoes.forEach(opcao => {
            const optionElement = document.createElement('option');
            optionElement.value = opcao.value;
            optionElement.text = opcao.text;
            descricaoSelect.appendChild(optionElement);
        });
    }

    tipoSelect.addEventListener('change', atualizarOpcoes);

    // Inicia as opções quando carrega a página
    atualizarOpcoes();
});