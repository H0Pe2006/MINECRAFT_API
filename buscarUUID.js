async function pesquisarUUID() {

    const uuid = document.getElementById('uuid').value;
    // console.log(uuid)
    const url_corpo = `https://crafatar.com/renders/body/${uuid}?size=4&default=MHF_Steve&overlay`;
    const url_skin = `https://crafatar.com/skins/${uuid}?size=512&default=MHF_Steve&overlay&scale=10`;
    const url_cape = `https://crafatar.com/capes/${uuid}?size=512&default=MHF_Steve&overlay&scale=10`;
    console.log(url_corpo)

    let img1 = document.getElementById("img1")
    img1.src = url_corpo
    let img2 = document.getElementById("img2")
    img2.src = url_skin
    let img3 = document.getElementById("img3")
    img3.src = url_cape
}

function showImageSection() {
    const imageSection = document.getElementById('imageSection');
    imageSection.style.display = 'block';
}
        
function downloadImage(imgId, fileName) {
    const imgElement = document.getElementById(imgId);
    const imgUrl = imgElement.getAttribute('src');
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('uuid').addEventListener('focusout',pesquisarUUID);
