let numeroSecreto = Math.floor(Math.random() * 100) + 1;
        
        // Função para adivinhar o número
        function adivinhar() {
            let chute = parseInt(document.getElementById('chute').value);
            let resultado = document.getElementById('resultado');

            if (isNaN(chute) || chute < 1 || chute > 100) {
                resultado.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
                return;
            }

            if (chute === numeroSecreto) {
                resultado.innerHTML = "Parabéns! Você acertou! O número secreto era " + numeroSecreto + ".";
            } else if (chute < numeroSecreto) {
                resultado.innerHTML = "O número é maior. Tente novamente!";
            } else {
                resultado.innerHTML = "O número é menor. Tente novamente!";
            }
        }