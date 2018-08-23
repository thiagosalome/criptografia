//Classe PolyalphabeticCipher
var PolyalphabeticCipher = function(message){
	var newMessage = [];
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var numeric = ['0','1','2','3','4','5','6','7','8','9'];
	var keyLength = Math.floor(Math.random() * (5 - 3 + 1)) + 3; //Gerando tamanho aleatório da chave entre 5 e 3
	var passKey = '';
	var positions = []; //Array que recebe todas as keys geradas
	var encrypt = '';
	var decrypt = '';

	this.encrypt = function(){
		espacos = /\s/g; //Representa todos os espacos
		newMessage = message.replace(espacos, '').split(''); //Tirando espaços e separando em letras
		generateKey();
		polyEnc();
		alert("Chave utilizada na Cifra Polialfabética: " + passKey + " { " + positions + " } ");
		return encrypt;
	}

	this.decrypt = function(keyUser){
		espacos = /\s/g; //Representa todos os espacos
		newMessage = message.replace(espacos, '').split(''); //Tirando espaços e separando em letras
		polyDec(keyUser);
		return decrypt;
	}

	var polyDec = function(keyUser){
		var l = 0;

		//Transformando keyUser em um vetor
		keyUser = keyUser.split('');
		//Pegando posições das letras de keyUser
		for (var n = 0; n < keyUser.length; n++) {
			for (var m = 0; m < alphabet.length; m++) {
				if(keyUser[n] == alphabet[m]){
					positions.push(m);
					m = alphabet.length;
				}
			}
		}

		for (var i = 0; i < newMessage.length; i++) {
			if(!isNaN(newMessage[i])){
				decrypt += newMessage[i];
			}	
			else{
				for (var j = 0; j < alphabet.length; j++) {
					if(newMessage[i] == alphabet[j]){
						if(j > positions[l] && alphabet[j - positions[l]] == undefined){
							var total = j + positions[l];
							var diferent = alphabet.length - total;
							decrypt += alphabet[diferent];
							j = alphabet.length;
						}
						else if(j < positions[l] && alphabet[j - positions[l]] == undefined){
							var total = j - positions[l];
							var diferent = alphabet.length + total;
							decrypt += alphabet[diferent];
							j = alphabet.length;
						}
						else{
							decrypt += alphabet[j - positions[l]];
							j = alphabet.length;
						}

						l++;
						if(l >= positions.length){
							l = 0;
						}
					}
				}
			}
		}
	}

	var polyEnc = function(){
		var l = 0;
		for (var i = 0; i < newMessage.length; i++) {
			if(!isNaN(newMessage[i])){
				encrypt += newMessage[i];
			}	
			else{
				for (var j = 0; j < alphabet.length; j++) {
					if(newMessage[i] == alphabet[j]){
						if(alphabet[j + positions[l]] == undefined){
							var total = j + positions[l];
							var diferent = total - alphabet.length;
							encrypt += alphabet[diferent];
							j = alphabet.length;
						}
						else{
							encrypt += alphabet[j + positions[l]];
							j = alphabet.length;
						}

						l++;
						if(l >= positions.length){
							l = 0;
						}
					}
				}
			}
		}
	}

	var generateKey = function(){
		for (var i = 0; i < keyLength; i++) {
			positions.push(Math.floor((Math.random() * 25) + 1));
			passKey += alphabet[positions[i]]; 
		}
	}

}