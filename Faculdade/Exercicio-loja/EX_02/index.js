let principal = document.getElementById("principal");
let horas = document.getElementById("horas");
let salario = document.getElementById("salario");

function calculaSalario(){ 
    let salarioHora = Number(salario.value);
    let horasTrabalhadas = Number (horas.value);

    if(horasTrabalhadas <= 160){
        let salarioMensal = salarioHora * 160;
        console.log (salarioMensal)

    }  else{

        let salarioMensal = salarioHora * 160;
        let numHrextra = horasTrabalhadas - 160;
        let valorExtra = salarioHora + (salarioHora * 50) / 100;
        let totalExtra = valorExtra * numHrextra;

        let salarioTotal = salarioMensal + totalExtra;

        console.log (numHrextra);
        console.log (totalExtra);
        console.log (valorExtra);
        console.log (salarioTotal);
    }
}