// Calculador de IMC

// let altura = Number(prompt('Qual sua altura em metros?'));
// let peso = Number(prompt('Qual seu peso?'));
// let imc = indiceMassaCorporal(altura, peso);


// function indiceMassaCorporal(alt, kg) {
//    return +(kg / (alt * alt)).toFixed(2);
// }

// console.log(imc);



// Calculando o Fatorial de um número

// function calcularFatorial(numero) {
//     let contador = 1;

//     while (numero >= 1) {
//         contador = contador * numero;
//         numero = numero - 1;
//     }
//     return contador;
// }

// let numero = prompt('Digite um valor a ser fatorado');
// let resultadoFatorial = calcularFatorial(numero);
// console.log(resultadoFatorial);



// Conversor de dolar para reais

// function chamarDolar() {
//     let valor = Number(prompt('Digite um valor a ser convertido de Dolar para Real "U$ - R$".'));
//     let valorConvertido = converteDolar(valor);
//     console.log(valorConvertido);
// }

// chamarDolar()

// function converteDolar(valor) {
//     let resultadoFinal = (valor / 4.8);
//     return resultadoFinal;
// }



// Área e Perimetro de uma sala retangular

// function calcMedidas(altura, largura) {
//     let areaSala = altura * largura;
//     let perimetroSala = 2 * (altura + largura);
//     return {perimetroSala, areaSala}; 
// }

// function chamaCalc() {
//     let altura = Number(prompt('Qual a altura da sala?'));
//     let largura = Number(prompt('Qual a largura da sala?'));
//     let Medidas = calcMedidas(altura, largura);
//     console.log(Medidas.perimetroSala);
//     console.log(Medidas.areaSala);
// }

// chamaCalc();




// Área e Perimetro de uma sala circular

// let pi = 3.14;

// function calcMedidasCirculo(pi, raio) {
//     let areaCirculo = pi * (raio * raio);
//     let perimentroCirculo = 2 * pi * raio;
//     return {areaCirculo, perimentroCirculo};
// }

// function chamarResultCirculo() {
//     let raio = Number(prompt('Digite um valor de raio do Circulo para calcurar a área e o perimetro da sala'));
//     let salaCircular = calcMedidasCirculo(pi, raio);
//     console.log(salaCircular.areaCirculo);
//     console.log(salaCircular.perimentroCirculo);
// }

// chamarResultCirculo()



function multiplicar() {
    let contadorTabuada = 1;
    let valorDigitado = document.querySelector('input').value;
    let voltarTabuada = "";

    while (contadorTabuada <= 10) {
        let resultadorMultiplicado = contadorTabuada * valorDigitado;
        let resultadoHTML = document.querySelector('h3');

        voltarTabuada += `${valorDigitado} x ${contadorTabuada} = ${resultadorMultiplicado}`;
        console.log(`${valorDigitado} x ${contadorTabuada} = ${resultadorMultiplicado}`);

        let quebraDeLinha = document.createElement('br');
        resultadoHTML.appendChild(quebraDeLinha);
        resultadoHTML.innerHTML += `${valorDigitado} x ${contadorTabuada} = ${resultadorMultiplicado}`;

        contadorTabuada++;
        limparCampos();
    }
}


function limparCampos() {
    valorDigitado = document.querySelector('input');
    valorDigitado.value = '';
}









