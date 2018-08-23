//Class Decryption
var Decryption = function(dataArray, message, keyUser){
	var dataArray = dataArray; //Recebendo array com os tipos de criptografia
	var decryption; //Variável que receberá a criptografia
	var count = 1;
	var keyNumber = '';
	var keyText = '';

	//Estrutura responsável por separar as chaves caso venha as duas (Cifra de César e Cifra Polialfabética)
 	for (var i = 0; i < keyUser.length; i++) {
		//Caso seja um número
		if(!isNaN(keyUser[i].value)){
			keyNumber += keyUser[i].value.trim();
		}
		else{
			keyText += keyUser[i].value.trim();
		}
	}

	this.decrypt = function(){
		for (var i = 0; i < dataArray.length; i++) {
			switch (dataArray[i]) {
				case 'caixadecesar':
					if(count == 1){
						var cb = new CaesarBox(message);
						decryption = cb.decrypt();
						count++;
					}
					else{
						var cb = new CaesarBox(decryption);
						decryption = cb.decrypt();
					}
					break;
				case 'cifradecesar':
					if(count == 1){
						var cc = new CaesarCipher(message);
						decryption = cc.decrypt(keyNumber);
						count++;
					}
					else{
						var cc = new CaesarCipher(decryption);
						decryption = cc.decrypt(keyNumber);
					}
					break;
				case 'cifrapolialfabetica':
					if(count == 1){
						var pc = new PolyalphabeticCipher(message);
						decryption = pc.decrypt(keyText);
						count++;
					}
					else{
						var pc = new PolyalphabeticCipher(decryption);
						decryption = pc.decrypt(keyText);
					}
					break;
				default:
			}
		}
		return decryption;
	}
}