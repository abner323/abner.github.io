function calcularIMC() {
    // Obtém os valores de peso e altura
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos de peso e altura.";
        return;
    }
    
    // Calcula o IMC
    let imc = peso / (altura * altura);
    
    // Classifica o IMC
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }
    
    // Exibe o IMC e a classificação
    document.getElementById('resultado').innerHTML = 
        "Seu IMC é: " + imc.toFixed(2) + "<br>" + 
        "Classificação: " + classificacao;
}