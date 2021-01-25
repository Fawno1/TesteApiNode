const Item = require('./item')

//métodos do CRUD

Item.methods(['get', 'put', 'post', 'delete'])

Item.updateOptions({ new: true, runValidators: true})

module.exports = Item