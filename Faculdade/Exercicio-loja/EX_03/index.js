let principal = document.getElementById ("principal");


let fieldsetNumconta = document.createElement ("fieldset");

fieldsetNumconta.innerHTML= `
    <legend> Bem Vindo Ao Nossso Banco</legend>
    <input type="number" placeholder="Digite o nº da conta..." name="Conta" id="numero_conta" value="">
    <input type="submit" onclick="valorConta()">
`
principal.appendChild(fieldsetNumconta);



function valorConta(){
    let numConta = document.getElementById ("numero_conta");
    let exibeNumconta = Number (numConta.value);
    let recebeValor = document.createElement ("fieldset");

    recebeValor.innerHTML= `
        <legend> Numero da conta: ${exibeNumconta}</legend>
        <input type="number" placeholder="Digite o saldo..." name="saldo" id="numero_saldo" value="">
        <input type="number" placeholder="Digite o debito..." name="debito" id="numero_debito" value="">
        <input type="number" placeholder="Digite o credito..." name="credito" id="numero_credito" value="">
        <input type="submit" onclick="exibeValor()">
    `
    principal.appendChild(recebeValor);
}



function exibeValor(){

    let exibe = document.createElement ("article");

    exibe.innerHTML= `
        <p> O VALOR DO SALDO ATUAL: R$ </p>
    `
    principal.appendChild(exibe);
}