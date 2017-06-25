//code permettant d'appliquer les  codes jQuery 
//avant meme le chargement complet de la page
$(document).ready(function(){

	$("p").hide();

	
	$("img").click(function(){
		$("#1_article").fadeIn(2000);
		$("#2_article").fadeIn(4000);
		$("#3_article").fadeIn(6000);
		$("#4_article").fadeIn(8000);
	});
});