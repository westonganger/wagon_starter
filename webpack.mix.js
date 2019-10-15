var mix = require('laravel-mix');
var SourceMapDevToolPlugin = require("webpack").SourceMapDevToolPlugin;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

mix.webpackConfig({
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, 'app/assets/'),
      "~" : path.resolve(__dirname),
    }
  },
  output: {
    chunkFilename: mix.inProduction() ? 'js/chunks/[name].[chunkhash].js' : 'js/chunks/[name].js',
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // use 'server' to start webserver instead of open file 
      openAnalyzer: false, // open generated webpage automatically upon every bundle
      reportFilename: './../bundle-analyzer.html'
    }),
    new SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: [
        /node_modules/,
      ],
      include: [], // disable all sourcemaps
    }),
  ]
})

mix
  .setPublicPath('public/')

  .disableSuccessNotifications()

  .options({
    clearConsole: false
  })

  /*
  // You probably shouldnt use this
  .autoload({
    //jquery: ['window.$', 'window.jQuery', 'jQuery', '$'],
    //moment: ['window.moment'],
  })
  */

  .js('app/assets/shared/javascripts/app.js', 'public/javascripts/shared/app.js')
  .sass('app/assets/shared/stylesheets/app.scss', 'public/stylesheets/shared/app.css')

  .js('app/assets/main/javascripts/app.js', 'public/javascripts/main/app.js')
  .sass('app/assets/main/stylesheets/app.scss', 'public/stylesheets/main/app.css')

  .sass('app/assets/main/stylesheets/bootstrap_4_custom.scss', 'public/stylesheets/main/bootstrap_4_custom.css')

  /*
  .copy('app/assets/vendor/javascripts/*', 'public/javascripts/vendor/')
  .copy('app/assets/vendor/stylesheets/*', 'public/stylesheets/vendor/')
  .copyDirectory('app/assets/vendor/stylesheets/fonts/', 'public/stylesheets/vendor/fonts/')
  */

  /*
  .combine([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/turbolinks/dist/turbolinks.js',
    'node_modules/rails-ujs/dist/rails-ujs.js',
    'src/assets/javascripts/application.js'
  ], 'public/dist/application.bundle.js')
  */

if(mix.inProduction()) {
  mix.version();
} else {
  //mix.sourceMaps(); // Makes dev bundle size massive
}
