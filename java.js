function so_numero() 
{
    let x = document.getElementById("num").value;
    let text;
    if (x.trim() === "" || isNaN(x)) {
        text = "Telefone inválido!"; }
    else {
        text = ""; }
    document.getElementById("resp1").innerHTML = text;
    so_letra();
    so_algo();
}

function so_letra() {
    let x = document.getElementById("nome").value;
    let text;
    if (x.trim() === "" || !/^[a-zA-Z\s]+$/.test(x) || /\d/.test(x) || /\s\s+/.test(x)) {
        text = "Nome inválido!";
    } else {
        text = ""; }
    document.getElementById("resp2").innerHTML = text;
}


function cleanInput() {
    const x = document.getElementById('num');
    const y = document.getElementById('nome');
    const z = document.getElementById('detalhe');
    x.value = ""
    y.value = ""
    z.value = ""
}

function so_algo() 
{
    let x = document.getElementById("detalhe").value;
    let text;
    if (x.trim() === ""){
        text = "Preencha o seu detalhe!"; }
    else {
        text = ""; }
    document.getElementById("resp3").innerHTML = text;
}