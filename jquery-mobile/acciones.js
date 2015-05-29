// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height()); //calcular el altode la pantalla del dispositivo 
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio=preloadFX('co','audio/conejo.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('to','audio/cotorra.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('cer','audio/Cerdo.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('ga','audio/GATO.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('va','audio/Vaca.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('bo','audio/borrego.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('le','audio/Leon.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('ag','audio/AGUILA.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('mon','audio/mono.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('coco','audio/COCODRILO.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('el','audio/Elefante.mp3',function(){},function(e){alert('Error'+e);});
		audio=preloadFX('oso','audio/OSO.mp3',function(){},function(e){alert('Error'+e);});
		
		
		
		//reproducri las notas
		
		$('.nota').bind('touchstart', function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
	 
	 },false);  //deviceready
});