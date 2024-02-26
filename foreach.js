var tempoFilme = 60; // A linha de código var tempoFilme = 60; em JavaScript cria uma variável chamada tempoFilme e atribui o valor numérico 60 a ela.

//A linha de código var inicioFilme = 0; cria uma variável chamada inicioFilme e a inicializa com o valor 0 em JavaScript
var inicioFilme = 0; // em segundos

//Essa linha de código é um loop for em JavaScript que itera sobre a variável t começando em 0 e continuando até que t seja menor que tempoFilme, incrementando t em 1 a cada iteração.
for (var t = 0; t < tempoFilme; t++) {

    //A linha de código setTimeout(function() em JavaScript agenda a execução de uma função após um intervalo de tempo especificado, usando a função setTimeout().
    setTimeout(function() {

        //console.clear(); é uma linha de código em JavaScript que limpa o console do navegador ou ambiente de execução, removendo todas as mensagens anteriores, mantendo-o organizado para visualização de novas saídas.
        console.clear();

        //Essa linha de código exibe uma mensagem no console informando que o filme "60 segundos" está sendo assistido e mostra o tempo restante para o término do filme, calculado subtraindo o tempo já decorrido do tempo total do filme.
        console.log("Assistindo filme 60 segundos... Ainda Faltam [" + (tempoFilme - inicioFilme) + "] segundos.");
        inicioFilme++;
    },t*1000);
}