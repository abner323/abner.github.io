function converter() {
    // Obtém o valor da conversão selecionada e o valor a ser convertido
    let tipoConversao = document.getElementById('conversao').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let resultado = "";

    // Verifica o tipo de conversão e realiza o cálculo correspondente
    if (isNaN(valor)) {
        resultado = "Por favor, insira um valor válido.";
    } else {
        if (tipoConversao === "celsiusParaFahrenheit") {
            // Conversão de Celsius para Fahrenheit
            resultado = (valor * 9/5) + 32 + " °F";
        } else if (tipoConversao === "metrosParaCentimetros") {
            // Conversão de Metros para Centímetros
            resultado = valor * 100 + " cm";
        } else if (tipoConversao === "quilosParaLibras") {
            // Conversão de Quilos para Libras
            resultado = valor * 2.20462 + " lb";
        }
    }

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = resultado;
}