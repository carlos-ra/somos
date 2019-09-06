const menuButtons = document.querySelectorAll('.invertable');
console.log("hice click");

menuButtons.forEach(item => {

	item.addEventListener('click', toogleMenu);
});

const imagesMenu = document.querySelectorAll('.menubtnimg');

imagesMenu.forEach(item => {
	console.log(item);
	item.addEventListener('click', toogleMenu);
});

const pre = document.querySelector('.prev-wrap');
const nex = document.querySelector('.next-wrap');
pre.addEventListener('mouseover',function(e){
	activeNext("prev");
});

nex.addEventListener('mouseover',function(e){
	activeNext("next");
});
var winvar = window.localStorage["menu"];
console.log(winvar);
if(winvar=="false"){
	hideMenu();
}else{
	window.localStorage.setItem("menu","false");
}



	function activeNext(opcion){
		var prev = document.querySelector('.prev-wrap');
		var next = document.querySelector('.next-wrap');
		if(opcion=="prev"){ //Se paro en prev
			if(!prev.classList.contains('active')){
				prev.classList.add('active');
			}
			if(next.classList.contains('active')){
				next.classList.remove('active');
			}
		}else{ //Se paro en next
			if(prev.classList.contains('active')){
				prev.classList.remove('active');
			}
			if(!next.classList.contains('active')){
				next.classList.add('active');
			}
		}
	}

	function toogleMenu(e){
		/*console.log(e);*/
		var menu = document.querySelector('.menu');
		if(menu.classList.contains('hidden')){
			showMenu();
		}else{
			hideMenu();
		}
	}
      function imgfondo (){
		  var imagenprincipal = document.querySelector ('.imgprincipal');

	  }
	function hideMenu(){

		var menuBlock = document.querySelector('.menu-block');
		menuBlock.style.bottom = "";

		var lines = document.querySelector('.menu-btn');
		lines.style.opacity = "0";

		var menu = document.querySelector('.menu');
		menu.classList.add('hidden');		

		var menuBg = document.querySelector('.menu__bg');
		menuBg.style.height = "0px";
		menuBg.style.opacity = "0";

		var menuBottonLine = document.querySelector('.menu__bottom-line');
		menuBottonLine.style.transform = "matrix(0, 0, 0, 1, 0, 56)";
		

		var menuContent = document.querySelector('.menu__content-wrap');
		menuContent.style.height = "0px";

		var menutext = document.querySelector('.glitch');
		menutext.style.opacity = "0";

		var vLines = document.querySelector('.lines-menu');
		vLines.classList.add('hidden');


	}

	function showMenu(){

		var lines = document.querySelector('.menu-btn');
		lines.style.opacity = "0";

		var menuBlock = document.querySelector('.menu-block');
		menuBlock.style.bottom = "0px";

		var menu = document.querySelector('.menu');
		menu.classList.remove('hidden');

		var menutext = document.querySelector('.glitch');
		menutext.style.opacity = "1";
		menutext.style.transition = "1s";

		var menuBg = document.querySelector('.menu__bg');
		menuBg.style.height = "100vh";
		menuBg.style.transition = "2s";
		menuBg.style.opacity = "1";		

		var menuBottonLine = document.querySelector('.menu__bottom-line');
		menuBottonLine.style.transform = "translateY(100vh)";	

		var menuContent = document.querySelector('.menu__content-wrap');
		menuContent.style.height = "100vh";

		var vLines = document.querySelector('.lines-menu');
		vLines.classList.remove('hidden');

		var verticalLine = document.querySelector('.vertical');
		verticalLine.style.transition = "6s";
		verticalLine.style.opacity = "1";	
	}
