//Classe CaesarCipher
var CaesarCipher = function(message){
	var newMessage = [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var numeric = ['0','1','2','3','4','5','6','7','8','9'];
	var key = Math.floor((Math.random() * 10) + 1); //Gera uma chave randomica entre 1 e 10 (Considera a quantidade de números)
	var encrypt = '';
	var decrypt = '';

	this.encrypt = function(){
		espacos = /\s/g; //Representa todos os espacos
		newMessage = message.replace(espacos, '').split(''); //Tirando espaços e separando em letras
		
		encryptChar();
		alert("Chave utilizada na Cifra de César: " + key);
		return encrypt;
	}

	this.decrypt = function(keyUser){
		espacos = /\s/g; //Representa todos os espacos
		newMessage = message.replace(espacos, '').split(''); //Tirando espaços e separando em letras
		decryptChar(keyUser);
		return decrypt;
	}

	var decryptChar = function(keyUser){
		for (var i = 0; i < newMessage.length; i++) {
			//Caso seja número
			if(!isNaN(newMessage[i])){
				for (var k = 0; k < numeric.length; k++) {
					//Os resultados do if abaixo sempre resultarão em positivo já que se k > keyUser, k é número positivo sempre
					if(newMessage[i] == numeric[k]){
						if(k > keyUser && numeric[k - keyUser] == undefined){
							var total = k + keyUser;
							var diferent = numeric.length - total;
							decrypt += numeric[diferent];
							k = numeric.length;
						}
						else if(k < keyUser && numeric[k - keyUser] == undefined){
							var total = k - keyUser;
							var diferent = numeric.length + total;
							decrypt += numeric[diferent];
							j = numeric.length;
						}
						else{
							decrypt += numeric[k - keyUser];
							k = numeric.length;
						}
					}						
				}
			}	
			else{
				for (var j = 0; j < alphabet.length; j++) {
					if(newMessage[i] == alphabet[j]){
						//Os resultados do if abaixo sempre resultarão em positivo já que se j > keyUser, j é número positivo sempre
						if(j > keyUser && alphabet[j - keyUser] == undefined){
							var total = j + keyUser;
							var diferent = alphabet.length - total;
							decrypt += alphabet[diferent];
							j = alphabet.length;
						}
						else if(j < keyUser && alphabet[j - keyUser] == undefined){
							var total = j - keyUser;
							var diferent = alphabet.length + total;
							decrypt += alphabet[diferent];
							j = alphabet.length;
						}
						else{
							decrypt += alphabet[j - keyUser];
							j = alphabet.length;
						}
					}
				}
			}
		}
	}

	var encryptChar = function(){
		for (var i = 0; i < newMessage.length; i++) {
			//Caso seja número
			if(!isNaN(newMessage[i])){
				for (var k = 0; k < numeric.length; k++) {
					if(newMessage[i] == numeric[k]){
						if(numeric[k + key] == undefined){
							var total = k + key;
							var diferent = total - numeric.length;
							encrypt += numeric[diferent];
							k = numeric.length;
						}
						else{
							encrypt += numeric[k + key];
							k = numeric.length;
						}
					}						
				}
			}	
			else{
				for (var j = 0; j < alphabet.length; j++) {
					if(newMessage[i] == alphabet[j]){
						if(alphabet[j + key] == undefined){
							var total = j + key;
							var diferent = total - alphabet.length;
							encrypt += alphabet[diferent];
							j = alphabet.length;
						}
						else{
							encrypt += alphabet[j + key];
							j = alphabet.length;
						}
					}
				}
			}
		}
	}

}