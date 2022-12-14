let principal = document.getElementById("principal");
let fieldsetRecebe = document.createElement ("fieldset");

fieldsetRecebe.innerHTML=`
    <legend>Digite o Valor do seu salario: </legend>
    <input type="number" placeholder="Hrs mensais trabalhadas:" name="num_horas" id="horas" value="">
    <input type="number" placeholder="Informe o salário por hora:" name="valor_salario" id="salario" value="">
    <input type="submit" onclick= "calculaSalario()">
`
principal.appendChild(fieldsetRecebe);


function calculaSalario(){ 
    let horas = document.getElementById("horas");
    let salario = document.getElementById("salario");
    let salarioHora = Number(salario.value);
    let horasTrabalhadas = Number (horas.value);

    if (horasTrabalhadas < 0 || salarioHora < 0 ){
        alert ("CAMPO INVALIDO");
        return;

    }

    if(horasTrabalhadas == '' || salarioHora == ''){
        alert ("CAMPO INVALIDO");
        return;

    }

    
    if(horasTrabalhadas <= 160){
        let salarioMensal = salarioHora * 160;

        let salarioTotal = (salarioMensal / 160) * horasTrabalhadas;

        let exibeResultado = document.createElement ("fieldset");

        exibeResultado.innerHTML=`
            <p> O Valor do salario BASE Mensal e de: R$ ${salarioMensal}</p>
            <P> Numero de horas trabalhadas nesse mes foram de: ${horasTrabalhadas} Hrs</p>
            <p> O VALOR TOTAL A RECEBER DE SALARIO E: R$ ${salarioTotal}</p>
        `
        principal.appendChild(exibeResultado);

    }  else{

        let salarioMensal = salarioHora * 160;
        let numHrextra = horasTrabalhadas - 160;
        let valorExtra = salarioHora + (salarioHora * 50) / 100;
        let totalExtra = valorExtra * numHrextra;

        let salarioTotal = salarioMensal + totalExtra;

        let exibeResultado = document.createElement ("fieldset");

        exibeResultado.innerHTML=`
            <p> O Valor do salario BASE Mensal de: R$ ${salarioMensal}</p>
            <P> Numero de horas trabalhadas nesse mes foram: ${horasTrabalhadas} Hrs</p>
            <P> Numero de horas EXTRAS trabalhadas nesse mes foram: ${numHrextra} Hrs</p>
            <P> Valor a receber por Hora Extra trabalhada: R$ ${valorExtra} </p><br>
            <p> O VALOR TOTAL A RECEBER DE SALARIO: R$ ${salarioTotal}</p>          
        `
        principal.appendChild(exibeResultado);

        console.log (numHrextra);
        console.log (salarioMensal);
        console.log (totalExtra);
        console.log (valorExtra);
        console.log (salarioTotal);
    }

    
}