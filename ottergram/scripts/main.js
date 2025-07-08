 var THUMBNAIL_LINK_SELECTOR = document.querySelectorAll('[data-image-role="trigger"]');

 THUMBNAIL_LINK_SELECTOR.forEach(function(links){
 	links.addEventListener('click',function(event){
 		event.preventDefault();
 		event.stopPropagation();
 		console.log("Liens Desactive")
 	})
 	links.style.pointerEvents = "none"
 });