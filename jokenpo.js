function jokenpo(){

    var rodada = 1; 
    var acertosComputador = 0; 
    var acertosJogador = 0; 
    var empates = 0; 
    const nome = prompt("Informe seu nome: "); 


    while(rodada < 9) {

        var jogador = prompt("Olá, escolha uma das opções para começar o nosso Jokenpô. \n Escolha: 1 - Pedra, 2 - Papel, 3  - Tesoura");
        console.log(jogador);
        var computador = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
        console.log(computador);

        if(jogador == 1 && computador == 1 || jogador == 2 && computador == 2 || jogador == 3 && computador == 3){

            alert('UAU você e o Computador empataram nessa rodada!');
            rodada++;
            empates++; 

        } else if(jogador == 1 && computador == 2 || jogador == 2 && computador == 3 || jogador == 3 && computador == 1){
            alert('AH, dessa vez o computador leva o ponto dessa rodada');
            rodada ++;
            acertosComputador++; 
        }else{
            alert("Parabéns você leva os pontos dessa rodada!!");
            rodada++;
            acertosJogador++; 
        }
    }
    alert(`Foram ${rodada} rodadas, vamos descobrir o vencedor final`);
    if(acertosJogador > acertosComputador){
        alert(`O GRANDE VENCEDOR FOI ${nome} :)).\n Olha o placar: ${acertosJogador} acertos para ${nome} e ${acertosComputador} acertos para o Pc, Pc ficou no chinelo!`);

    } else if(acertosComputador > acertosJogador){
        alert(`Vitória das máquinas, O pc é o grande campeão. \n Olha o placar: ${acertosComputador} acertos para o Pc e ${acertosJogador} para vc ${nome}.`);
    }else{
        alert(`Temos um empate que incrível.\n ${acertosJogador} acertos para ${nome}, e ${acertosComputador} acertos para o Computador`);
    }
        
    
}