const { toUpperCase } = require('../utils');

module.exports = {
  description: 'Create vue view',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（Please enter a path）',
      default: 'views'
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称（Please enter module name）'
    }
  ],
  actions: (data) => {
    const { name, path } = data
    const upperFirstName = toUpperCase(name)

    const actions = []

    if (name) {
      actions.push({
        type: 'add',
        path: `./src/${path}/${upperFirstName}.vue`,
        templateFile: './plop-templates/view/view.hbs',
        data: {
          name,
          upperFirstName
        }
      })
    }

    return actions
  }
}
