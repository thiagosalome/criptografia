jQuery(document).ready(function($) {
	moveOptions();

	//Botão de Confirmar
	$(".js-confirm").on('click', confirmOptions);
	
	//Botão de Recarregar
	$(".js-reload").on('click', reloadOptions);

	//Botão de Ver Mensagem e Esconder Mensagem
	$(".js-view").on('mousedown', vhMessage);
	$(".js-view").on('mouseup', vhMessage);

	//Botão de Criptografar
	$(".js-encrypt").on('click', encrypted);	

	//Botão de Descriptografar
	$(".js-decrypt").on('click', decrypted);
	
	//Fechar o Modal
	$(document).on('click', '.js-close', function(e){ 
		e.stopPropagation();
		if(e.target.classList[1] === "js-close"){
			$(".modal").fadeOut("100", function(){
				$(".js-message-enc").val(''); //Limpando o input de encriptação
				$(".js-message-dec").val(''); //Limpando o input de decriptação
				$(".modal-body").fadeOut(); //Escondendo o corpo (parte branca) do modal
				$(".encrypted-message").remove(); //Remove a mensagem de resposta
				$(".js-modcheck").prop('checked', false); //Tira o checked dos dois input:radio
			}); 
		}
	});
});

//Array que irá receber o data-encrypt
var dataEncrypt = []; 

//Função responsável por permitir ao usuário mover as opções de encriptação
var moveOptions = function(){
	$('.sortable').sortable({
		revert: true,
		//Assim que o sortable for alterado
		update: function(event, ui){
			//Se o vetor não contém esse dado então irá adicionar
			if(!dataEncrypt.includes(ui.item.data('encrypt'))){
				dataEncrypt.push(ui.item.data('encrypt'));
			}
			//Permite ao usuário unir apenas dois tipos de criptografias
			if(dataEncrypt.length > 1){
				$( ".sortable" ).sortable( "disable" );
			}
		}
	});

	$('.draggable').draggable({
		revert: "invalid",
		cursor: "move",
		connectToSortable: ".sortable",
	});
}

//Função responsável por validar as opções escolhidas pelo usuário e abrir modal
var confirmOptions = function(){
	if(dataEncrypt.length == 0){
		alert("Não foi selecionada nenhuma cripitografia. ");
	}
	else{
		$(".modal").fadeIn('100');
	}
}

//Função responsável por recarregar a página e zerar as opções
var reloadOptions = function(){
	location.reload();
}

//Função responsável por mostrar e esconder a mensagem que o usuário está digitando
var vhMessage = function(e){
	if(e.type == 'mousedown'){
		$(".js-message-enc").attr('type', 'text')
	} 
	else if(e.type == 'mouseup'){
		$(".js-message-enc").attr('type', 'password');
	}
}

//Função que valida a mensagem digitada e chama a classe Encryption
var encrypted = function(){
	var message = $('.js-message-enc').val();
	var valid = /^[a-z0-9 ]+$/i;
	var raiz = Math.sqrt(message.length);

	if(message == ''){
		alert("Escreva uma mensagem antes de criptografar.");
	}
	else if(!valid.exec(message)){
		alert("A mensagem só aceita letras e números");
	}
	else if((dataEncrypt == 'caixadecesar' && raiz % 1 != 0) || (dataEncrypt.indexOf('caixadecesar') > -1 && raiz % 1 != 0)){
		alert("Para codificar em uma Caixa de César a quantidade total de letras deve possuir uma raiz inteira! Exemplo: 4,9,16");
	}
	else{
		$(".js-encrypt").fadeOut(300, function() {
			$(".js-animate-enc").fadeIn(300);
	
			//Instancia Encryption
			var enc = new Encryption(dataEncrypt, message);
			setTimeout(function(){response(enc.encrypt())}, 300);
		});
	}
}

//Função que valida a criptografia digitada e chama a classe Decryption
var decrypted = function(){
	var message = $('.js-message-dec').val();
	var complement = $(".js-complement"); //Input que é injetado em caso de CC ou CP
	var valid = /^[a-z0-9 ]+$/i;
	var raiz = Math.sqrt(message.length);

	if(message == '' || complement == ''){
		alert("É necessário o preenchimento de todos os campos para a descriptografia.");
	}
	else if(!valid.exec(message)){
		alert("A mensagem só aceita letras e números");
	}
	else if(dataEncrypt == 'caixadecesar' && raiz % 1 != 0){
		alert("A seguinte criptografia não possui o número de caracteres necessários para descriptografar a Caixa de César.");
	}
	else{
		$(".js-decrypt").fadeOut(300, function() {
			$(".js-animate-enc").fadeIn(300);

			//Instancia Encryption
			var dec = new Decryption(dataEncrypt, message, complement);
			setTimeout(function(){response(dec.decrypt())}, 300);
		});
	}
}

//Função responsável por apresentar a resposta ao usuário
var response = function(edMessage){
	$(".js-animate-enc").fadeOut(300, function() {
		$(this).after("<div class='encrypted-message'><span>Resultado: </span>" + edMessage + "</div>");
	});
}

