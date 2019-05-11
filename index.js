module.exports = {
  rules: {
    'vue-attributes-order': require('./rules/vue-attributes-order')
  },
  configs: {
    recommended: {
      plugins: [
        'infermedica'
      ],
      rules: {
        'infermedica/vue-attributes-order': 'error'
      }
    }
  }
}
