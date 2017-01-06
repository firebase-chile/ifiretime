     
jQuery(document).ready(function($) {



//  Index.html ------------------------------------------------------------------
// Cerramos Seccion
var ref = new Firebase("https://ifiretime.firebaseio.com/");

	$('#close').on('click', function (e) {        
				e.preventDefault();
                     ref.unauth();
                     window.location="login.html";
	 });

// Mostrar Panel de control

$('#apanel').on('click', function (e) {        
				e.preventDefault();
				OcultarTodos();
                $(".block-adm").css("display", "block");
                $( "#apanel" ).addClass( "active" );
	 });

$('#aprogramas').on('click', function (e) {        
				e.preventDefault();
				OcultarTodos();
                $(".block-programas").css("display", "block");
                $( "#aprogramas" ).addClass( "active" );
	 });


$('#admin').on('click', function (e) {        
				e.preventDefault();
				OcultarTodos();
                $(".block-admin").css("display", "block");
                $( "#admin" ).addClass( "active" );
	 });



$('#acapitulos').on('click', function (e) {        
				e.preventDefault();
				OcultarTodos();
                $(".block-capitulos").css("display", "block");
                $( "#acapitulos" ).addClass( "active" );
	 });



$('.numProgramas').html(DameCantProgramas());

function DameCantProgramas(){  
       return "a";
}



function OcultarTodos(){
  	     $(".block-adm").css("display", "none");
         $(".block-programas").css("display", "none");
         $(".block-admin").css("display", "none");
         $(".block-capitulos").css("display", "none");

         $( "#apanel" ).removeClass( "active" );
         $( "#aprogramas" ).removeClass( "active" );
         $( "#admin" ).removeClass( "active" );
         $( "#acapitulos" ).removeClass( "active" );
  }
  

function Inicializar(){
	     OcultarTodos();
  	     $(".block-adm").css("display", "block");
  	     $( "#apanel" ).addClass( "active" );
  }

Inicializar();


function Idioma()
 {
 

 ref.child("admin/idioma").on("value", function(snapshot) {
  idioma = snapshot.val();

if (idioma == "English"){

ref.child("public/idioma/en/text01").on("value", function(snapshot) {
      $("#index-text01").text(snapshot.val());
});


}else{
	ref.child("public/idioma/es/text01").on("value", function(snapshot) {
      $("#index-text01").text(snapshot.val());
});
}


});







}

Idioma();


$('#idiomaselect').on('change', function() {
  ref.update({
  	"admin/idioma" : this.value
  })
});

$('#temaselectadmin').on('change', function() {
  ref.update({
  	"admin/temaselectadmin" : this.value
  })
});

$('#temaselectmovil').on('change', function() {
  ref.update({
  	"admin/temaselectmovil" : this.value
  })
});


$('#temaselectTV').on('change', function() {
  ref.update({
  	"admin/temaselectTV" : this.value
  })
});


$('#cambiar-mail').on(function() {
   
});




//  login.html ------------------------------------------------------------------

$('#doRegister').on('click', function (e) {
				e.preventDefault();
				
				var ref = new Firebase("https://ifiretime.firebaseio.com/");
				
				if( $('#inputEmail').val() != '' && $('#inputPassword').val() != '')
				{                 	
	
					ref.authWithPassword({
						email    : $('#inputEmail').val(),
						password : $('#inputPassword').val()
					}, function(error, authData) {
						if (error) {
							console.log("Login Failed!", error);

							$('#messageError').html('</br><div class="alert alert-danger" role="alert">ERROR: '+ error.code + '</div>')
						} else {
							console.log("Authenticated successfully with payload:", authData);
							window.location="index.html";
						}
					});
				}


			});







	
});



     