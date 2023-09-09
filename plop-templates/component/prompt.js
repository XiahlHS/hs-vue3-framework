const { toUpperCase } = require('../utils');

module.exports = {
  description: 'Create vue component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称（Please enter the component name）'
    }
  ],
  actions: (data) => {
    const { name } = data
    const upperFirstName = toUpperCase(name)

    const actions = []
    if (name) {
      actions.push({
        type: 'add',
        path: `./src/components/${upperFirstName}/src/${upperFirstName}.vue`,
        templateFile: './plop-templates/component/component.hbs',
        data: {
          name,
          upperFirstName
        }
      }, {
        type: 'add',
        path: `./src/components/${upperFirstName}/index.ts`,
        templateFile: './plop-templates/component/index.hbs',
        data: {
          upperFirstName
        }
      })
    }

    return actions
  }
}
