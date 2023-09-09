const testGenerator = require('./plop-templates/test/prompt.js')
const viewGenerator = require('./plop-templates/view/prompt.js')
const componentGenerator = require('./plop-templates/component/prompt.js')

module.exports = function (plop) {
    plop.setGenerator('test', testGenerator)
    plop.setGenerator('view', viewGenerator)
    plop.setGenerator('component', componentGenerator)
}