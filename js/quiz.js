function calcularPontuacao() {
    let pontuacao = 0;

    // Respostas corretas
    const respostasCorretas = {
        pergunta1: 'canhoto',
        pergunta2: 'portugues',
        pergunta3: '5',
        pergunta4: 'brasil',
        pergunta5: 'flamengo'
    };

    // Verificando as respostas do quiz
    const form = document.getElementById('quizForm');
    for (let i = 1; i <= 5; i++) {
        const respostaSelecionada = form[`pergunta${i}`].value;
        if (respostaSelecionada === respostasCorretas[`pergunta${i}`]) {
            pontuacao++;
        }
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = 
        `Você acertou ${pontuacao} de 5 perguntas!`;

    // Fornecendo uma mensagem de incentivo
    if (pontuacao === 5) {
        document.getElementById('resultado').innerHTML += "<br>Excelente! Você é um verdadeiro fã de futebol!";
    } else if (pontuacao >= 3) {
        document.getElementById('resultado').innerHTML += "<br>Bom trabalho! Você tem bons conhecimentos de futebol.";
    } else {
        document.getElementById('resultado').innerHTML += "<br>Tente mais uma vez! Aprenda mais sobre futebol.";
    }
}