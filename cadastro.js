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

function validarSenhaEAvancar() {
    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar-senha').value;
    const erro = document.getElementById('erro-senha');

    if (senha.length < 6) {
        erro.textContent = 'A senha precisa ter pelo menos 6 caracteres.';
        return;
    }
    if (senha !== confirmar) {
        erro.textContent = 'As senhas não coincidem.';
        return;
    }

    erro.textContent = '';
    irParaEtapa(2);
}

function selecionarGenero(botao) {
    document.querySelectorAll('.genero-btn').forEach(btn => btn.classList.remove('sel'));
    botao.classList.add('sel');
}

function selecionarOpcao(card) {
    document.querySelectorAll('.opcao-card').forEach(c => {
        c.classList.remove('sel');
        c.querySelector('.opcao-radio').classList.remove('sel');
    });
    card.classList.add('sel');
    card.querySelector('.opcao-radio').classList.add('sel');
}

function selecionarTag(tag) {
    tag.classList.toggle('sel');
}

function previewFoto(event) {
    const arquivo = event.target.files[0];
    if (!arquivo) return;
    const leitor = new FileReader();
    leitor.onload = function(e) {
        document.getElementById('upload-circulo').innerHTML = '<img src="' + e.target.result + '">';
        document.getElementById('upload-titulo').textContent = 'Foto selecionada ✓';
    };
    leitor.readAsDataURL(arquivo);
}

function concluirCadastro() {
    alert('Cadastro concluído! Bem-vindo ao Baby Safe!');
}