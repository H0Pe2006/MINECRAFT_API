function limparForm(endereco) {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('ddd').value = '';
    document.getElementById('ibge').value = '';
    document.getElementById('siafi').value = '';
}


function preencherForm(endereco) {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
    document.getElementById('ddd').value = endereco.ddd;
    document.getElementById('ibge').value = endereco.ibge;
    document.getElementById('siafi').value = endereco.siafi;
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
            preencherForm(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }

}

document.getElementById('cep').addEventListener('focusout',pesquisarCep);