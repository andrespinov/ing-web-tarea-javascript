const esPangrama = (texto) => {
  for(let i = 65; i <= 90; i++) {
    const mayuscula = res = String.fromCharCode(i)
    const minuscula = res = String.fromCharCode(i + 32)
    if (!texto.includes(mayuscula) && !texto.includes(minuscula)) {
      return false
    }
  }
  return true
}

const manejarBoton = () => {
  const texto = document.getElementById("texto").value
  const respuesta = document.getElementById("respuesta")
  const mensajeDeRespuesta = `El texto ${esPangrama(texto) ? "sí" : "no"} es un pangrama`
  respuesta.innerHTML = mensajeDeRespuesta
  console.log(mensajeDeRespuesta)
}
