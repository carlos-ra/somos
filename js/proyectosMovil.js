var quieroNormalizar = false;

$('.closeImg').on('click', function() { // when you click the div
	quieroNormalizar = true;
	normalizarTodo();
});

$('.img').on('click', function() { // when you click the div
  var numero = $(this).context.id;  
  nume = numero.substr(-1,1);  
  expandirImagen(nume,$(this).context);  
});

function normalizarTodo(){
	console.log("Normalizar");
	$('.img').addClass('galNormal');
	$('.img').removeClass('galNo');
	$('.img').removeClass('galOn');
}

function expandirImagen(num,thisn){
	normalizarTodo();
	console.log(thisn);
	console.log("Expandir");
	if (num >= 1 && num <= 3) {
		if (num == 1) {
			$('#img1').addClass('galOn');			
			$('#img2').addClass('galNo');
			$('#img3').addClass('galNo');
			$('#img3').removeClass('galNormal');
			$('#img2').removeClass('galNormal');
		}
		if (num == 2) {
			$('#img2').addClass('galOn');			
			$('#img1').addClass('galNo');
			$('#img3').addClass('galNo');
			$('#img3').removeClass('galNormal');
			$('#img1').removeClass('galNormal');
		}
		if (num == 3) {
			$('#img3').addClass('galOn');			
			$('#img2').addClass('galNo');
			$('#img1').addClass('galNo');
			$('#img1').removeClass('galNormal');
			$('#img2').removeClass('galNormal');
		}
	}
	if (num >= 4 && num <= 6) {
		if (num == 4) {
			$('#img4').addClass('galOn');			
			$('#img5').addClass('galNo');
			$('#img6').addClass('galNo');
			$('#img6').removeClass('galNormal');
			$('#img5').removeClass('galNormal');
		}
		if (num == 5) {
			$('#img5').addClass('galOn');			
			$('#img4').addClass('galNo');
			$('#img6').addClass('galNo');
			$('#img6').removeClass('galNormal');
			$('#img4').removeClass('galNormal');
		}
		if (num == 6) {
			$('#img6').addClass('galOn');			
			$('#img5').addClass('galNo');
			$('#img4').addClass('galNo');
			$('#img4').removeClass('galNormal');
			$('#img5').removeClass('galNormal');
		}
	}

	if (quieroNormalizar) {
		normalizarTodo();
		quieroNormalizar = false;
	}
}