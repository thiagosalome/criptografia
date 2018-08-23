jQuery(document).ready(function($) {
	$check = $(".js-modcheck");
	$modencrypt = $(".js-modencrypt");
	$moddecrypt = $(".js-moddecrypt");

	$check.click(function(event) {
		var option = $(this).val();

		//Checa a opção escolhida pelo usuário e a faz aparecer os campos de preenchimento
		switch (option) {
			case 'encrypt':
				$moddecrypt.slideUp('slow', function(){
					$(".encrypted-message").remove(); //Remove a mensagem de resposta
					$(".js-encrypt").fadeIn(100); //Faz o botão de criptografia aparecer novamente
					$modencrypt.slideDown('slow');
				});
				break;
			case 'decrypt':
				validDecrypt();
				$modencrypt.slideUp('slow', function(){
					$(".encrypted-message").remove(); //Remove a mensagem de resposta
					$(".js-decrypt").fadeIn(100); //Faz o botão de descriptografia aparecer novamente
					$moddecrypt.slideDown('slow');
				});
				break;
			default:
		}
	});

});

//Função responsável por validar as opções de descriptografias escolhidas pelo usuário
var validDecrypt = function(){
	$(".js-complement").remove(); //Remove os complementos necessários para certos tipos de descriptografias

	if((dataEncrypt == 'cifradecesar') || (dataEncrypt.indexOf('cifradecesar') > -1 && dataEncrypt.indexOf('caixadecesar') > -1)){
		var content = '<input type="number" id="keycc" class="js-complement" name="keycc" placeholder="Chave">';
		$(".js-input").after(content);
	}
	else if((dataEncrypt == 'cifrapolialfabetica') || (dataEncrypt.indexOf('cifrapolialfabetica') > -1 && dataEncrypt.indexOf('caixadecesar') > -1)){
		var content = '<input type="text" id="keycp" class="js-complement" name="keycp" placeholder="Chave Polialfabética">';
		$(".js-input").after(content);
	}
	else if(dataEncrypt.indexOf('cifradecesar') > -1 && dataEncrypt.indexOf('cifrapolialfabetica') > -1){
		var content = '<input type="number" id="keycc" class="js-complement" name="keycc" placeholder="Chave">' + 
									'<input type="text" id="keycp" class="js-complement" name="keycp" placeholder="Chave Polialfabética" style="margin-top: 10px;">';
		$(".js-input").after(content);
	}
}