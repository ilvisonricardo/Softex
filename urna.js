var candX = 0;
var candY = 0;
var candZ = 0;
branco = 0;
nulo = 0;
 
do {
    voto = parseInt(window.prompt("Digite o número do seu candidato: "));
    if(voto == 889){
        candX = candX + 1;
        window.alert("Você votou no candidato_X");
    } else if (voto == 847){
        candY = candY + 1;
        window.alert("Você votou no candidato_Y");     
    } else if (voto == 515){
        candZ = candZ + 1;
        window.alert("Você votou no candidato_Z");   
    } else if (voto == 0){
        branco = branco + 1;
        window.alert("Você votou em Branco!");     
    } else {
        nulo = nulo +1;
        window.alert("Você votou em Nulo!"); 
    }
    operacao = parseInt(window.prompt("Você deseja encerrar a sessão? [0] Não | [1] Sim"));
} while(operacao == 0);

if (candX > candY && (candX > candZ)){
    window.alert("O Candidato_X está ELEITO! " + "Com um total de " +candX + " votos!");
    window.alert("Candidato Y: " +candY);
    window.alert("Candidato Z: " +candZ);
    window.alert("Votos em Branco: " +branco);
    window.alert("Votos Nulos: " +nulo);
} else if (candY > candX && (candY > candZ)){
    window.alert("O Candidato_Y está ELEITO! " + "Com um total de " +candY + " votos!");
    window.alert("Candidato X: " +candX);
    window.alert("Candidato Z: " +candZ);
    window.alert("Votos em Branco: " +branco);
    window.alert("Votos Nulos: " +nulo);
}  else if (candZ > candX && (candZ > candY)){
    window.alert("O Candidato_Z está ELEITO! " + "Com um total de " +candZ + " votos!");
    window.alert("Candidato X: " +candX);
    window.alert("Candidato Y: " +candY);
    window.alert("Votos em Branco: " +branco);
    window.alert("Votos Nulos: " +nulo);
} else {
    window.alert("Resultado Eleitoral INDETERMINADO!");
}

    