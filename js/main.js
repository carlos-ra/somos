const menuButtons = document.querySelectorAll('.invertable');

menuButtons.forEach(item => {
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
		var menu = document.querySelector('.menu');
		if(menu.classList.contains('hidden')){
			showMenu();
		}else{
			hideMenu();
		}
	}

	function hideMenu(){

		var menuBlock = document.querySelector('.menu-block');
		menuBlock.style.bottom = "";
		console.log(menuBlock);

		var lines = document.querySelector('.menu-btn');
		lines.style.opacity = "0";

		var menuImg = document.querySelector('.menubtnimg');
		menuImg.style.visibility = "visible";

		var menu = document.querySelector('.menu');
		menu.classList.add('hidden');
		console.log(menu);

		var menuBg = document.querySelector('.menu__bg');
		menuBg.style.height = "0px";
		menuBg.style.opacity = "0";
		console.log(menuBg);

		var menuBottonLine = document.querySelector('.menu__bottom-line');
		menuBottonLine.style.transform = "matrix(0, 0, 0, 1, 0, 56)";
		console.log(menuBottonLine.style);

		var menuContent = document.querySelector('.menu__content-wrap');
		menuContent.style.height = "0px";

		var menutext = document.querySelector('.glitch');
		menutext.style.opacity = "0";

		var vLines = document.querySelector('.lines-menu');
		vLines.classList.add('hidden');


	}

	function showMenu(){

		var menuImg = document.querySelector('.menubtnimg');
		menuImg.style.visibility = "hidden";

		var lines = document.querySelector('.menu-btn');
		lines.style.opacity = "1";

		var menuBlock = document.querySelector('.menu-block');
		menuBlock.style.bottom = "0px";
		console.log(menuBlock);

		var menu = document.querySelector('.menu');
		menu.classList.remove('hidden');
		console.log(menu);

		var menutext = document.querySelector('.glitch');
		menutext.style.opacity = "1";
		menutext.style.transition = "1s";

		var menuBg = document.querySelector('.menu__bg');
		menuBg.style.height = "789px";
		menuBg.style.transition = "2s";
		menuBg.style.opacity = "1";
		console.log(menuBg);

		var menuBottonLine = document.querySelector('.menu__bottom-line');
		menuBottonLine.style.transform = "translateY(789px)";
		console.log(menuBottonLine.style);

		var menuContent = document.querySelector('.menu__content-wrap');
		menuContent.style.height = "789px";

		var vLines = document.querySelector('.lines-menu');
		vLines.classList.remove('hidden');



	}
