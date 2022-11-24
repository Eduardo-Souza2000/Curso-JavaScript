document.getElementById("campo_botao").value= "ZERAR";
let campo_numero1 = document.getElementById("result_1");
let campo_numero2 = document.getElementById("result_2");
let campo_botao = document.getElementById("campo_botao");
let nome1 = document.getElementById("nome_1");
let nome2 = document.getElementById("nome_2");

campo_numero1.value = 0;
campo_numero2.value = 0;


function nome_time1(){

    if (campo_numero1.value == 0){

        nome_1.style.background="green";
        nome_2.style.background="";
        nome1.value= window.prompt ('digite o nome time 1');
    
    }
    
    let resultado1 = Number(campo_numero1.value ++);
    campo_numero1.innerHTML= resultado1;

    if (resultado1 > 12 ) {
        console.log ('voce venceu');
        zerar();
    }

}

function nome_time2(){

    if (campo_numero2.value == 0){ 
        nome_2.style.background="green";
        nome_1.style.background="";
        nome2.value= window.prompt ('digite o nome time 2');
    }

    nome_1.style.background="red";
    nome_2.style.background="green";
    let resultado2 = Number(campo_numero2.value ++);
    campo_numero2.innerHTML= resultado2;

<<<<<<< HEAD
    if (resultado2 > 12) {

=======
    if (resultado2 > 12 ) {
>>>>>>> 1edf255a598c948b079b72bea12d083f810d358d
        console.log ('voce venceu');
        zerar();
        
    }

}

function zerar(){
    Number (campo_numero1.value= 0);
    campo_numero1.innerHTML= 0;
    nome1.value= ('');
    nome_1.style.background="";

    Number (campo_numero2.value= 0);
    campo_numero2.innerHTML= 0;
    nome2.value= ('');
    nome_2.style.background="";
}



 


/*
campo_botao.addEventListener('mouseover',ficar_verde);
campo_botao.addEventListener('mouseout',ficar_amarelo);
campo_botao.addEventListener('mousedown',ficar_vermelho);
campo_botao.addEventListener('mouseup',ficar_azul);


function ficar_verde (){
    campo_botao.style.background="green";
 }

function ficar_amarelo(){
    campo_botao.style.background= "yellow";
}

function ficar_vermelho(){
    campo_botao.style.background= "red";
}

function ficar_azul(){
    campo_botao.style.background= "blue";
}
*/
