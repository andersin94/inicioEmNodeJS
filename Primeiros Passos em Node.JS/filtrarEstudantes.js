const estudantes = require('./estudantes.json')

function filtrarPorPropriedades (lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtrarPorPropriedades(estudantes, 'cep')
console.log(listaEnderecosIncompletos);