const eliminarElementosNoUnicos = (lista) => {
  return lista.filter((entero) => {
    const repetidos = lista.filter((_entero) => entero === _entero)
    return repetidos.length > 1
  })
}

const manejarBoton = () => {
  const texto = document.getElementById("lista").value
  const lista = texto.split(',')
  const listaFiltrada = eliminarElementosNoUnicos(lista)
  respuesta.innerHTML = `La nueva lista es: ${listaFiltrada}`
}
