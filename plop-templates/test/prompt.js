
/**
 * API: How to use
 * description： 
 * prompts：https://github.com/SBoudrias/Inquirer.js/tree/master/packages/demo/demos
 * actions: https://plopjs.com/documentation/#interface-generatorconfig
 */

module.exports = {
    description: 'test plop ',
    prompts: [ 
        {
            type: 'confirm',
            name: 'confirmName',
            message: 'confirm'
        },
        {
            type: 'input',
            name: 'inputName',
            message: 'input'
        },
    ],
    actions: (data) => {
        console.log(data)
        let _rel = [];
        return _rel;
    }
}