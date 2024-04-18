const animais = require('./animais.json')

const novoAnimal = {
    id: 4,
    nome: 'Nemo',
    tipo: 'Peixe',
    habitat: 'Mar'
}

animais.push(novoAnimal);

console.log(animais);