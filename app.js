function isValidCard(){
  var cardNumber = prompt('Digite o número do seu cartão');
  while (cardNumber === ''){
  cardNumber = prompt('Digite um número');
}
  var arr = [];
  for (var i = 0; i < cardNumber.length; i++) {
  parseInt(cardNumber[i].split(''));
  arr.push(parseInt(cardNumber[i].split('')));
  }
  var reverseCardNumber = arr.reverse();
  for (var j = 1; j < reverseCardNumber.length; j=j+2) {
  if (j % 2 === 0  ){
  var multiplicate = reverseCardNumber[j] * 2;
  reverseCardNumber[j] = parseInt(multiplicate / 10) + multiplicate % 10;
  }
  }
  var sum = 0;
  for (var k = 0; k < reverseCardNumber.length; k++) {
  sum += reverseCardNumber[k];
 }return sum % 10 === 0 ? alert('Numero de Cartão Valido') : alert('Numero de Cartão invalido');
 }
isValidCard();
