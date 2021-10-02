 var dupla = window.prompt("Digite a quantidade de pessoas para o Baile")
for (let contador = 0; contador <= dupla; contador = contador + 1) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + "    PAR   está Classificado! Seja bem vindo ao baile")
    } else if  (contador % 2 != 0) {
       console.log(contador + "    IMPAR está Desclassificado! Que pena você nao pode participar ")
    } else { 
       console.log(contador + '\t numero "ZERO" 0')
    }
}