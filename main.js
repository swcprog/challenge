var botaoCriptografar = document.querySelector("#botaoCriptografar");
var botaoDecriptografar = document.querySelector("#botaoDecriptografar");
var caixaTextoMensagemCriptografada = document.querySelector("#mensagemCriptografada");
var botaoCopiar = document.querySelector("#botaoCopiar");
var tituloDireita = document.querySelector("#titulo-mensagem");


botaoCriptografar.addEventListener("click", criptografrar);
botaoDecriptografar.addEventListener("click", decriptografar);
botaoCopiar.addEventListener("click",copiar);


function criptografrar() {

	var caixaTextoMensagem = document.querySelector("#mensagem");
	var caixaDeTexto = caixaTextoMensagem.value;
	var texto = caixaDeTexto.split("");
	


	for(i=0; i<texto.length; i++){

		if(texto[i]=="a"){
			texto[i] = "ai";
		}

		if(texto[i]=="e"){
			texto[i] = "enter";
		}

		if(texto[i]=="u"){
			texto[i] = "ufat";
		}

		if(texto[i]=="i"){
			texto[i] = "imes";
		}

		if(texto[i]=="o"){
			texto[i] = "ober";
		}

	}

	var novoTexto = texto.join("");
	

	caixaTextoMensagemCriptografada.value = novoTexto;
	caixaTextoMensagem.value = "";
	tituloDireita.innerHTML = "Mensagem Criptografada";

	}

function decriptografar() {

	var caixaTextoMensagem = document.querySelector("#mensagem");
	var texto = caixaTextoMensagem.value;
	
	

	letras = texto.split("");


	var novoTexto = texto.replaceAll("ai","a");
	novoTexto = novoTexto.replaceAll("enter","e");
	novoTexto = novoTexto.replaceAll("ufat","u");
	novoTexto = novoTexto.replaceAll("imes","i");
	novoTexto = novoTexto.replaceAll("ober","o");

	
	caixaTextoMensagemCriptografada.value = novoTexto;
	caixaTextoMensagem.value = "";
	tituloDireita.innerHTML = "Mensagem Decriptografada";
	
}

function copiar() {

	var caixaTextoMensagem = document.querySelector("#mensagem");
	
	
	var caixaTextoMensagemCriptografada = document.querySelector("#mensagemCriptografada");
	var texto =  caixaTextoMensagemCriptografada.value;
	navigator.clipboard.writeText(texto);
	caixaTextoMensagemCriptografada.value="";
	caixaTextoMensagem.value = "";

}

// a = ai
// e = enter
// u = ufat
// i = imes
// o = ober