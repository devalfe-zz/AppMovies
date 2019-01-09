const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
let themes = [
    'resources/sass/themes/default-theme.scss',
    'resources/sass/themes/lix-theme.scss'
]
themes.forEach((item) => {
    mix.sass(item, 'public/css/themes')
})


mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .js('resources/js/main.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css')

.sourceMaps()
    .disableNotifications()

if (mix.inProduction()) {
    mix.version()
}