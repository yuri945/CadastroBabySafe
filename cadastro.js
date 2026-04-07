document.querySelector('.item-etapa.ativo').classList.replace('ativo', 'concluido');
document.querySelector('.item-etapa:not(.concluido):not(.ativo)').classList.add('ativo');