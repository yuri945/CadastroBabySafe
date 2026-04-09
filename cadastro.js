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

    etapaAtual = novaEtapa;
}