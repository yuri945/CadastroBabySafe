let etapaAtual = 1;

function irParaEtapa(novaEtapa) {

   
    const itens = document.querySelectorAll('.item-etapa');
    itens.forEach((item, index) => {
        const numero = index + 1;
        item.classList.remove('ativo', 'concluido');

        if (numero < novaEtapa) {
            item.classList.add('concluido');
            item.querySelector('.numero-etapa').textContent = '✓';
        } else if (numero === novaEtapa) {
            item.classList.add('ativo');
            item.querySelector('.numero-etapa').textContent = numero;
        } else {
            item.querySelector('.numero-etapa').textContent = numero;
        }
    });

  
    document.querySelectorAll('.cartao-formulario').forEach(cartao => {
        cartao.style.display = 'none';
    });

    document.getElementById('etapa-' + novaEtapa).style.display = 'block';

    etapaAtual = novaEtapa;
}

function selecionarGenero(botao) {
    document.querySelectorAll('.genero-btn').forEach(btn => {
        btn.classList.remove('sel');
    });
    botao.classList.add('sel');
}