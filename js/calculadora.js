
function calcular() {
    // Obter os valores dos inputs
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    // Verifica se ambos os números são válidos
    if (numero1 === '' || numero2 === '' || isNaN(numero1) || isNaN(numero2)) {
        document.write('Por favor, insira ambos os números.');
        return;
    }

    // Processamento de dados
    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2;

    // Exibe os resultados
    document.write('A soma dos números é: ' + soma + '<br>' +
                   'A subtração dos números é: ' + subtracao + '<br>' +
                   'A multiplicação dos números é: ' + multiplicacao + '<br>' +
                   'A divisão dos números é: ' + divisao); 
    }
