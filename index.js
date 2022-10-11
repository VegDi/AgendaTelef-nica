const form = document.getElementById('form-atividade');
const atividade = [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionalinha();
    atualizaTabela();
});

function adicionalinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');

    if (atividade.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido em sua agenda`);
    } else {
        atividade.push(inputNomeContato.value);
        notas.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}
    inputNomeContato.value = '';
    inputTelefone.value = '';
}
function atualizaTabela() {
    const corpoTabela =  document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
