
let campo_numero1 = document.getElementById("numero_1");
let campo_numero2 = document.getElementById("numero_2");
let campo_resultado = document.getElementById("resultato");
console.log (campo_numero1.value);
console.log (campo_numero2.value);

function somar(){
    let valor_soma = Number (campo_numero1.value) + Number (campo_numero2.value);
    campo_resultado.innerHTML = 'valor da soma éh: ' + valor_soma;
    console.log (campo_numero1.value)
}