
let valorProduto = Number (prompt (" Entre com o valor do produto"));
console.log (valorProduto);
console.log(typeof(valorProduto));


if (valorProduto >= 20){
    document.getElementById ('resultado').innerHTML = 'APROVADO';
}
else {
    document.getElementById ('resultado').innerHTML = 'NÃO FOI APROVADO';
}