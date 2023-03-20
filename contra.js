function funcion() {
  // obtener los valores de usuario y contraseña del formulario
  var usuario = document.getElementById("valempz").value;
  var contraseña = document.getElementById("12345").value;

  // validar si los campos no están vacíos
  if (usuario == "" || contraseña == "") {
    alert("Por favor, ingrese su usuario y contraseña.");
    return false;
  }

  // validar si el usuario y la contraseña son correctos (ejemplo)
  if (usuario == "valempz" && contraseña == "123") {
    alert("Hola! si pudiste ingresar");
    return true;
  } else {
    alert("usuario o contraseña incorrecto");
    return false;
  }
}

function cambiopassword() {
  // obtener los valores del formulario de cambio de contraseña
  var antiguacontraseña = document.getElementById("antiguacontraseña").value;
  var nuevacontraseña = document.getElementById("nuevacontraseña").value;
  var confirmarcontraseña = document.getElementById("confirmarcontraseña").value;

  // validar si los campos no están vacíos
  if (antiguacontraseña == "" || nuevacontraseña == "" || confirmarcontraseña == "") {
    alert("los campos estan vacios");
    return false;
  }

  // validar si la nueva contraseña y la confirmación coinciden
  if (nuevacontraseña != confirmarcontraseña) {
    alert(
      "La nueva contraseña y la confirmación no coinciden. Por favor, inténtelo de nuevo."
    );
    return false;
  }

  // validar si la contraseña actual es correcta
  if (antiguacontraseña == "123") {
    alert("La contraseña se ha cambiado correctamente y es 123");
    return true;
  } else {
    alert("La contraseña actual es incorrecta. Por favor, inténtelo de nuevo.");
  }
}
 //cambiar la visibilidad de los elementos del html de los id de inicio de sesion y el cambio de contraseña
 // en style.display none lo que quiere decir es que no se va a mostrar en la pagina 
 // y el block lo que si se va a mostrar en la pagina web
 //aqui cuando le des a la opcion de cambiar contraseña cuando de lo muestra en el inicio lo que hara es que te enviara 
 //al formulario para cambiar la contraseña 
function valecambiopassword() {
  document.getElementById("inicio-sesion").style.display = "none";
  document.getElementById("cambio-de-contraseña").style.display = "block";
}
// lo que hace este, es que cuando estes en el formulario de cambio de contraseña, si quisieras cancelar el proceso te devolvera a la pagina de inico de sesion
function ocultarcontraseña() {
  document.getElementById("cambio-de-contraseña").style.display = "none";
  document.getElementById("inicio-sesion").style.display = "block";
}
