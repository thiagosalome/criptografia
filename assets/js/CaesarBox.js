//Classe CaesarBox
var CaesarBox = function(message){
	var newMessage = [];
	var boxCaesar = [];
	var encrypt = '';
	var decrypt = '';

	this.encrypt = function(){
		espacos = /\s/g; //Representa todos os espacos
		newMessage = message.replace(espacos, '').split(''); //Tirando espaços e separando em letras
	
		//Seleciona a raiz do tamanho da mensagem, e caso não seja inteira, sempre arredonda para cima
		var raiz = Math.sqrt(newMessage.length); 

		// alert("Modularização da Caixa de César: " + raiz + " x " + raiz);

		//Sabendo se tem uma raiz inteira
		switch (raiz) {
			case 2:
				//Monta a caixa de César com raiz de 4
				for (var j = 0; j < newMessage.length; j+=2) {
					boxCaesar.push([newMessage[j], newMessage[j + 1]]);
				}
				break;
			case 3:
				for (var j = 0; j < newMessage.length; j+=3) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2]]);
				}
				break;
			case 4:
				//Monta a caixa de César com raiz de 16
				for (var j = 0; j < newMessage.length; j+=4) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3]]);
				}
				break;
			case 5:
				for (var j = 0; j < newMessage.length; j+=5) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4]]);
				}
				break;
			case 6:
				for (var j = 0; j < newMessage.length; j+=6) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4], newMessage[j + 5]]);
				}
				break;
			case 7:
				for (var j = 0; j < newMessage.length; j+=7) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4], newMessage[j + 5], newMessage[j + 6]]);
				}
				break;
			case 8:
				for (var j = 0; j < newMessage.length; j+=8) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4], newMessage[j + 5], newMessage[j + 6], newMessage[j + 7]]);
				}
				break;
			default:
		}

		//Encriptando a mensagem
		for (var i = 0; i < boxCaesar.length; i++) {
			for (var j = 0; j < boxCaesar[i].length; j++) {
				encrypt += boxCaesar[j][i];
			}
		}

		return encrypt;
	}

	this.decrypt = function(){
		espacos = /\s/g; //Representa todos os espacos
		newMessage = message.replace(espacos, '').split(''); //Tirando espaços e separando em letras da mensagem criptografada
		
		//Seleciona a raiz do tamanho da mensagem criptografada, e caso não seja inteira, sempre arredonda para cima
		var raiz = Math.sqrt(newMessage.length); 
		
		//Sabendo se tem uma raiz inteira
		switch (raiz) {
			case 2:
				//Monta a caixa de César com raiz de 4
				for (var j = 0; j < newMessage.length; j+=2) {
					boxCaesar.push([newMessage[j], newMessage[j + 1]]);
				}
				break;
			case 3:
				for (var j = 0; j < newMessage.length; j+=3) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2]]);
				}
				break;
			case 4:
				//Monta a caixa de César com raiz de 16
				for (var j = 0; j < newMessage.length; j+=4) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3]]);
				}
				break;
			case 5:
				for (var j = 0; j < newMessage.length; j+=5) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4]]);
				}
				break;
			case 6:
				for (var j = 0; j < newMessage.length; j+=6) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4], newMessage[j + 5]]);
				}
				break;
			case 7:
				for (var j = 0; j < newMessage.length; j+=7) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4], newMessage[j + 5], newMessage[j + 6]]);
				}
				break;
			case 8:
				for (var j = 0; j < newMessage.length; j+=8) {
					boxCaesar.push([newMessage[j], newMessage[j + 1], newMessage[j + 2], newMessage[j + 3], newMessage[j + 4], newMessage[j + 5], newMessage[j + 6], newMessage[j + 7]]);
				}
				break;
			default:
		}

		//Encriptando a mensagem
		for (var i = 0; i < boxCaesar.length; i++) {
			for (var j = 0; j < boxCaesar[i].length; j++) {
				decrypt += boxCaesar[j][i];
			}
		}
		return decrypt;
	}

	//Função que preenche o array de mensagem caso a raiz de seu tamanho não seja inteira
	// var fillBox = function(raiz){
	// 	for (var i = newMessage.length; i < Math.pow(raiz, 2); i++) {
	// 		newMessage.push('');
	// 	}
	// }
}