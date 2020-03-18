
module.exports = {
  configureWebpack: {
    resolve: {
      //配置别名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    },
    module: {
      rules: [
        {
          test: /\.less$/,
            use: [{
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        './src/assets/style/variables/*.less',
                        './src/assets/style/mixins/*.less',
                    ]
                }
            }]
        }
      ]
    }
  }
}