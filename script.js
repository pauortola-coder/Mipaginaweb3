var puntosLocal = 0;
var puntosVisitante = 0;
var jugadores = [];

function sumarLocal() {
  puntosLocal = puntosLocal + 1;
  document.getElementById("puntos-local").textContent = puntosLocal;
  actualizarMensaje();
}

function sumarVisitante() {
  puntosVisitante = puntosVisitante + 1;
  document.getElementById("puntos-visitante").textContent = puntosVisitante;
  actualizarMensaje();
}

function reiniciar() {
  puntosLocal = 0;
  puntosVisitante = 0;
  document.getElementById("puntos-local").textContent = 0;
  document.getElementById("puntos-visitante").textContent = 0;
  document.getElementById("mensaje").textContent = "";
}

function actualizarMensaje() {
  var mensaje = document.getElementById("mensaje");
  if (puntosLocal > puntosVisitante) {
    mensaje.textContent = "Gana Equipo Azul";
  } else if (puntosVisitante > puntosLocal) {
    mensaje.textContent = "Gana Equipo Rojo";
  } else {
    mensaje.textContent = "Empate";
  }
}

document.getElementById("formulario").onsubmit = function(e) {
  e.preventDefault();
  var nombre = document.getElementById("nombre").value.trim();
  var aviso = document.getElementById("aviso");

  if (nombre == "") {
    aviso.textContent = "Escribe un nombre";
    aviso.className = "error";
    return;
  }

  for (var i = 0; i < jugadores.length; i++) {
    if (jugadores[i].toLowerCase() == nombre.toLowerCase()) {
      aviso.textContent = "Ya existe";
      aviso.className = "error";
      return;
    }
  }

  jugadores.push(nombre);
  document.getElementById("nombre").value = "";
  aviso.textContent = "Añadido: " + nombre;
  aviso.className = "";
  mostrarLista();
};

function mostrarLista() {
  var lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (var i = 0; i < jugadores.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = "<span>" + jugadores[i] + "</span><button onclick='borrar(" + i + ")'>X</button>";
    lista.appendChild(li);
  }
}

function borrar(i) {
  var nombre = jugadores[i];
  jugadores.splice(i, 1);
  document.getElementById("aviso").textContent = "Eliminado: " + nombre;
  mostrarLista();
}
