const PacktrackerPlugin = require('@packtracker/webpack-plugin')

module.exports = {
  plugins: [
    new PacktrackerPlugin({
      project_token: '5483c4bf-c72f-4f38-be62-85745cba157f',
      upload: true,
      fail_build: true
    })
  ]
}