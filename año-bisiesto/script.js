const esBisiesto = (numero) => {
  let bisiesto = false
  if (numero % 4 === 0) {
    if (numero % 100 === 0) {
      if (numero % 400 === 0) {
        bisiesto = true
      }
    } else {
      bisiesto = true
    }
  }
  return bisiesto
}

const manejarBoton = () => {
  const numero = document.getElementById("numero").value
  const respuesta = document.getElementById("respuesta")
  respuesta.innerHTML = `El año ${esBisiesto(numero) ? "sí" : "no"} es bisiesto`
}
