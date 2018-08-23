//Class Encryption
var Encryption = function(dataArray, message){
	var dataArray = dataArray; //Recebendo array com os tipos de criptografia
	var encryption; //Variável que receberá a criptografia
	var count = 1;

	this.encrypt = function(){
		for (var i = 0; i < dataArray.length; i++) {
			switch (dataArray[i]) {
				case 'caixadecesar':
					if(count == 1){
						var cb = new CaesarBox(message);
						encryption = cb.encrypt();
						count++;
					}
					else{
						var cb = new CaesarBox(encryption);
						encryption = cb.encrypt();
					}
					break;
				case 'cifradecesar':
					if(count == 1){
						var cc = new CaesarCipher(message);
						encryption = cc.encrypt();
						count++;
					}
					else{
						var cc = new CaesarCipher(encryption);
						encryption = cc.encrypt();
					}
					break;
				case 'cifrapolialfabetica':
					if(count == 1){
						var pc = new PolyalphabeticCipher(message);
						encryption = pc.encrypt();
						count++;
					}
					else{
						var pc = new PolyalphabeticCipher(encryption);
						encryption = pc.encrypt();
					}
					break;
				default:
			}
		}

		return encryption;
	}
}