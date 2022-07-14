const X = "X";
const O = "O";

let i ;
let jogador = "X";

marcarJogadorAtivo(jogador);

function proximoJogador ( );{
    jogador = jogador === "X" ? "O" : "X" ;
    marcarJogadorAtivo(jogador);
}

// X vencedor na horizontal
for (i = 1; i &lt;= 3 ; i ++ ){
    if ( desenharSimbolo(X, i, 1) = selecionarArea (i,1) &amp;&amp;
        desenharSimbolo(X, i, 2) = selecionarArea (i,2) &amp;&amp;
        desenharSimbolo(X, i, 3) = selecionarArea ( i,3) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
    }
}

// x vencedor na vertical
for ( i = 1; i &lt;= 3 ; i ++){
    if ( desenharSimbolo(X, 1, i) = selecionarArea (1,i) &amp;&amp;
        desenharSimbolo(X, 2, i) = selecionarArea (2,i) &amp;&amp;
        desenharSimbolo(X, 3, i) = selecionarArea ( 3,i) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
    }
}

// x vencedor na diagonal
    if ( desenharSimbolo(X, 1, 1) = selecionarArea (1,1) &amp;&amp;
        desenharSimbolo(X,2, 2) = selecionarArea (2,2) &amp;&amp;
        desenharSimbolo(X, 3, 3) = selecionarArea ( 3,3) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
}

    if ( desenharSimbolo(X,1, 3) = selecionarArea (1,3) &amp;&amp;
        desenharSimbolo(X,2, 2) = selecionarArea (2,2) &amp;&amp;
        desenharSimbolo(X,3, 1) = selecionarArea (3,1) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
    }

// O vencedor na horizontal
for (i = 1; i &lt;= 3 ; i ++ ){
    if ( desenharSimbolo(O, i, 1) = selecionarArea (i,1) &amp;&amp;
        desenharSimbolo(O, i, 2) = selecionarArea (i,2) &amp;&amp;
        desenharSimbolo(O, i, 3) = selecionarArea ( i,3) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
    }
}

// x vencedor na vertical
for ( i = 1; i &lt;= 3 ; i ++){
    if ( desenharSimbolo(O, 1, i) = selecionarArea (1,i) &amp;&amp;
        desenharSimbolo(O, 2, i) = selecionarArea (2,i) &amp;&amp;
        desenharSimbolo(O, 3, i) = selecionarArea ( 3,i) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
    }
}
// x vencedor na diagonal
    if ( desenharSimbolo(O, 1, 1) = selecionarArea (1,1) &amp;&amp;
        desenharSimbolo(O,2, 2) = selecionarArea (2,2) &amp;&amp;
        desenharSimbolo(O, 3, 3) = selecionarArea ( 3,3) {
        exibirResultado(Vencedor);
    }
    Else {exibirResultado(Empate);
    }

    if ( desenharSimbolo(O,1, 3) = selecionarArea (1,3) &amp;&amp;
        desenharSimbolo(O,2, 2) = selecionarArea (2,2) &amp;&amp;
        desenharSimbolo(O,3, 1) = selecionarArea (3,1) {
        exibirResultado(Vencedor);
    }
        Else {exibirResultado(Empate);
    }

function selecionarArea(posicaoLinha, posicaoColuna) {

}

function reiniciarJogo() {
    location.reload();
}
