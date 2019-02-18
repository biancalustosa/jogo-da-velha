let simbolo = prompt('Você é o jogador um. Digite X ou O para começar.');
// let jogadorDois = prompt('Você é o jogador dois. Escolha X ou O para começar.');

// const quadUm = document.querySelector ('.quad-um');
// const quadDois = document.querySelector ('.quad-dois');
// const quadTres = document.querySelector ('.quad-tres');
// const quadQuatro = document.querySelector ('.quad-quatro');
// const quadCinco= document.querySelector ('.quad-cinco');
// const quadSeis = document.querySelector ('.quad-seis');
// const quadSete = document.querySelector ('.quad-sete');
// const quadOito = document.querySelector ('.quad-oito');
// const quadNove = document.querySelector ('.quad-nove');

let jogadorUm = "X" ;
let jogadorDois = "O";

let quadUm;
// let quadDois;
// let quadTres;
// let quadQuatro;
// let quadCinco;
// let quadSeis;
// let quadSete;
// let quadOito;
// let quadNove;


// const um = X;
// const dois = O;

// let jogadorUm;
// let jogadorDois;

while( simbolo == jogadorUm && simbolo == jogadorDois){
    // console.log(jogadorUm, jogadorDois);

    if(simbolo == jogadorUm){
        alert('Você é o X.');
    }

    else{
        alert('Você é a O.');
    }

    if(quadUm == jogadorUm && quadDois == jogadorUm && quadTres == jogadorUm || quadUm == jogadorDois && quadDois == jogadorDois && quadTres == jogadorDois || quadQuatro == jogadorUm && quadCinco == jogadorUm && quadSeis == jogadorUm || quadQuatro == jogadorDois && quadCinco == jogadorDois && quadSeis == jogadorDois || quadSete == jogadorUm && quadOito == jogadorUm && quadNove == jogadorUm || quadSete == jogadorDois && quadOito == jogadorDois && quadNove == jogadorDois ){

        alert('Parabéns. Você ganhou o jogo.');

            if(quadUm == jogadorUm && quadCinco == jogadorUm && quadNove == jogadorUm || quadUm == jogadorDois && quadCinco == jogadorDois && quadNove == jogadorDois || quadTres == jogadorUm && quadCinco == jogadorUm && quadSete == jogadorUm || quadTres == jogadorDois && quadCinco == jogadorDois && quadSete == jogadorDois ){

             alert('Parabéns. Você ganhou o jogo.');

             if(quadUm == jogadorUm && quadQuatro == jogadorUm && quadSete == jogadorUm || quadUm == jogadorDois && quadQuatro == jogadorDois && quadSete == jogadorDois || quadDois == jogadorUm && quadCinco == jogadorUm && quadOito == jogadorUm || quadDois == jogadorDois && quadCinco == jogadorDois && quadOito == jogadorDois || quadTres == jogadorUm && quadSeis == jogadorUm && quadNove == jogadorUm || quadTres == jogadorDois && quadSeis == jogadorDois && quadNove == jogadorDois) {
                    alert('Parabéns. Você ganhou o jogo.');
                }
                else{
                    alert('Vocêr perdeu.');
                }

            }

    }

    else{
        alert('Deu velha. O jogo acabou.');
    }
    
}

quadUm.onclick = jogadorUm;
// quadUm.onclick = jogadorDois;
