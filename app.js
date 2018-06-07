///criando a função
function isValidCard(){
  ////solicitando ao usuario o numero do cartão
  var cardNumber = prompt('Digite o número do seu cartão');
 ////caso ele deixe valor em branco retornar digite um numero
  while (cardNumber === ''){
    cardNumber = prompt('Digite um número');
}
//transformando o conteudo do prompt em array e em number
var arr = [];
for (var i = 0; i < cardNumber.length; i++) {
  parseInt(cardNumber[i].split(''));
  arr.push(parseInt(cardNumber[i].split('')));
  }
  /////transformando o array em posição inversa
  var reverseCardNumber = arr.reverse();
////buscando os números em posição par
   for (var j = 1; j < reverseCardNumber.length; j=j+2) {
     ///buscando numeros pares
     if (j % 2 === 0  ){
             ///aplicando a multiplicação aos numeros pares
       var multiplicate = reverseCardNumber[j] * 2;
       reverseCardNumber[j] = parseInt(multiplicate / 10) + multiplicate % 10;
      }
    }
    var sum = 0;
    for (var k = 0; k < reverseCardNumber.length; k++) {
//somando cada elemento do array inverso
    sum += reverseCardNumber[k];

////retornando ao usuario o numero do cartão
  }return sum % 10 === 0 ? alert('Numero de Cartão Valido') : alert('Numero de Cartão invalido');
}
isValidCard();
