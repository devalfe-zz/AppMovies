const mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack')

let config = {
    resolve: {
        alias: {
            'config': 'js/config',
            'lang': 'js/lang',
            'plugins': 'js/plugins',
            'vendor': 'js/vendor',
            'dashboard': 'js/dashboard',
            'main': 'js/main',
            'js': 'js'
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, "resources")
        ]
    },
};

if (!process.argv.includes('--hot')) {
    config = Object.assign(config, {
        output: {
            publicPath: "/",
            chunkFilename: 'js/[name].[chunkhash].js'
        }
    })
}
mix.webpackConfig(config)

let sync = {
    host: '192.168.1.102',

    base_url: 'appmovies.test',
    watchFiles: [
        'app/**/*.php',
        'resources/views/**/*.php',
        //'app/resources/views/**/*.php',
        'public/js/**/*.js',
        //'**/*.php',
        'public/css/**/*.css'
    ]
}

mix.browserSync({
    files: sync.watchFiles,
    host: sync.host,
    proxy: sync.base_url,
    port: sync.port,
    online: true,
    logConnections: false,
    reloadOnRestart: true,
    notify: true,
    open: "local", //false, local, external, ui, tunnel
    injectChanges: true,
    logSnippet: true,
    browser: ["chrome", "firefox"]
});

let themes = [
    'resources/sass/themes/default-theme.scss',
    'resources/sass/themes/lix-theme.scss'
]
themes.forEach((item) => {
    mix.sass(item, 'public/css/themes')
})


mix
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .js('resources/js/main.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css')
    .sourceMaps()
    .disableNotifications()

if (mix.inProduction()) {
    mix.version()
}