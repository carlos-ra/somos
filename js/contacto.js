//Inicializar firebase
//!!>>>Esta es la unica info que cambia en caso de cambiar la cuenta de firebase
var firebaseConfig = {
    apiKey: "AIzaSyDHOtRXWC8rCBj5ZsiX5GMuixXOsSU2Z3s",
    authDomain: "somos-contact.firebaseapp.com",
    databaseURL: "https://somos-contact.firebaseio.com",
    projectId: "somos-contact",
    storageBucket: "somos-contact.appspot.com",
    messagingSenderId: "519596909400",
    appId: "1:519596909400:web:972a06330a9bff63"
  };

  firebase.initializeApp(firebaseConfig);

//Referenciar coleccion mensajes
var messagesRef = firebase.database().ref('mensajes');



document.getElementById('formularioDeContacto').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();

	var nombre = getInputValue('name');
	var telefono = getInputValue('telefono');
	var email = getInputValue('email');
	var asunto = getInputValue('asunto');
	var mensaje = getInputValue('mensaje');

	saveMessage(nombre,telefono,email,asunto,mensaje);

	document.getElementById('contactoEnviado').innerHTML='<h2 class="mensajeContacto"><div class="tMess">Gracias, muy pronto nos pondremos en<br> contacto contigo...<br> estás un paso más cerca de tu experiencia.</div></h2>';
}

//Funcion para obtener los valores del form
function getInputValue(id){
	return document.getElementById(id).value;
}

//Guardar mensaje en firebase
function saveMessage(nombre,telefono,email,asunto,mensaje){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		fecha: new Date().toString(),
		nombre: nombre,
		telefono: telefono,
		email: email,
		asunto: asunto,
		mensaje: mensaje
	});
}