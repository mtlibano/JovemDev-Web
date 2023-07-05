document.getElementById('nome').addEventListener('input', verificar);
document.getElementById('peso').addEventListener('input', verificar);
document.getElementById('altura').addEventListener('input', verificar);

function verificar() {
    var nome = document.getElementById('nome').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var btn = document.getElementById('btn');
  
    if (nome !== '' && peso !== '' && altura !== '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function imc() {
    nome = document.getElementById('nome').value;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    sexo = document.querySelector('input[name="sexo"]:checked').value;
    
    let imc = (peso / (altura * altura)).toFixed(1);
    let avaliacao = '';

    if (sexo === 'masculino') {
        if (imc < 20.7) {
            avaliacao =  'Abaixo do peso';
        } else if (imc <= 26.4) {
            avaliacao = 'Peso ideal';
        } else if (imc <= 27.8) {
            avaliacao = 'Pouco acima do peso';
        } else if (imc <= 31.1) {
            avaliacao = 'Acima do peso';
        } else if (imc > 31.2 ) {
            avaliacao = 'Obesidade';
        }
    } else if (sexo === 'feminino') {
        if (imc < 19.1) {
            avaliacao = 'Abaixo do peso';
        } else if (imc <= 25.8) {
            avaliacao = 'Peso ideal';
        } else if (imc <= 27.3) {
            avaliacao = 'Pouco acima do peso';
        } else if (imc <= 32.3) {
            avaliacao = 'Acima do peso';
        } else if (imc > 32.4 ) {
            avaliacao = 'Obesidade';
        }
    }

    msg = `Nome: ${nome}\nIMC: ${imc}\nAvaliação: ${avaliacao}`;

    document.getElementById('dados').value = msg;

    return false;
}