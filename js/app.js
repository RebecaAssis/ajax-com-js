const preencheCampos = json => {
    document.querySelector('input[name=street]').value = json.logradouro;
    document.querySelector('input[name=district]').value = json.bairro;
    document.querySelector('input[name=complement]').value = json.complemento;
    document.querySelector('input[name=city]').value = json.localidade;
    document.querySelector('input[name=state]').value = json.uf;
}

const buscaCep = cep => {
    let url = 'http://viacep.com.br/ws/' + cep + '/json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                preencheCampos(JSON.parse(xhr.responseText));
            }
        }
    }
    xhr.send();
}

let cepNumebers = [];

document.querySelector("#cep")
    .addEventListener("input", function(e) {
        cepNumebers.push(e.data);

        if(cepNumebers.length == 8) {
            buscaCep(cepNumebers.join(""));
        }

        console.log(e);
    })