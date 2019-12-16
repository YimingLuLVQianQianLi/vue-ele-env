const { notEmpty } = require('../utils.js')
const moment = require('moment')
module.exports = {
  description: 'generate a view',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'view name please',
    validate: notEmpty('name')
  }, {
		type: 'input',
		name: 'user',
		message: 'view creater name please',
		validate: notEmpty('user')
	},
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: '<template>',
      value: 'template',
      checked: true
    },
    {
      name: '<script>',
      value: 'script',
      checked: true
    },
    {
      name: 'style',
      value: 'style',
      checked: true
    }
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'View require at least a <script> or <template> tag.'
      }
      return true
    }
  }
  ],
  actions: data => {
    const name = '{{name}}'
		const user = '{{user}}'
		const date = moment().format('YYYY-MM-DD HH:mm:ss')
    const actions = [{
      type: 'add',
      path: `src/views/${name}/index.vue`,
      templateFile: 'plop-templates/view/vue.hbs',
      data: {
        name,
        date,
        user,
        template: data.blocks.includes('template'),
        script: data.blocks.includes('script'),
        style: data.blocks.includes('style')
      }
    }, {
      type: 'add',
      path: `src/views/${name}/index.scss`,
      templateFile: 'plop-templates/view/scss.hbs',
      data: {
        name,
        date,
        user,
      }
    }, {
      type: 'add',
      path: `src/views/${name}/index.js`,
      templateFile: 'plop-templates/view/js.hbs',
      data: {
        name,
        date,
        user,
      }
    }]

    return actions
  }
}
