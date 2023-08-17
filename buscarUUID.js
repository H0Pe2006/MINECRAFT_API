async function pesquisarUUID() {

    const uuid = document.getElementById('uuid').value;
    // console.log(uuid)
    const url_corpo = `https://crafatar.com/renders/body/${uuid}?size=512&default=MHF_Steve&overlay&scale=10`;
    const url_skin = `https://crafatar.com/skins/${uuid}?size=512&default=MHF_Steve&overlay&scale=10`;
    const url_cape = `https://crafatar.com/capes/${uuid}?size=512&default=MHF_Steve&overlay&scale=10`;
    console.log(url_corpo)

    let img1 = document.getElementById("img1")
    img1.src = url_corpo
    let img2 = document.getElementById("img2")
    img2.src = url_skin
    let img3 = document.getElementById("img3")
    img3.src = url_cape


    // console.log(url_skin)
    // console.log(url_cape)

    // if (cepValido(cep)) {
    //     const dados = await fetch(url);
        
    //     console.log(dados)

    //     const endereco = await dados.json();
    //     console.log(endereco)

    //     if (endereco.hasOwnProperty('erro')) {
    //         document.getElementById('endereco').value = 'CEP não encontrado!';
            
    //     } else {
    //         preencherForm(endereco);
    //     }
    // } else {
    //     document.getElementById('endereco').value = 'CEP incorreto!';
    // }

}

document.getElementById('uuid').addEventListener('focusout',pesquisarUUID);
