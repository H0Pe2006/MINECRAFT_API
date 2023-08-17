function limparForm(uuid) {
    document.getElementById('uuid').value = '';
}


function preencherForm(uuid) {
    document.getElementById('uuid').value = data.logradouro;
  
}


function eNumero(numero) {
    return /^[0-9]+$/.test(numero);
}

function cepValido(cep) {
    return cep.length == 8 && eNumero(cep);
} 

async function pesquisarCep() {
    limparForm();

    const cep = document.getElementById('cep').value.replace("-", "");
    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        const dados = await fetch(url);
        
        console.log(dados)

        const endereco = await dados.json();
        console.log(endereco)

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
            
        } else {
            preencherForm(uuid);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }

}

document.getElementById('cep').addEventListener('focusout',pesquisarCep);
