// Tarea: Configura tu gulpfile.js
// 1. Importa gulp y gulp-sass
// 2. Define una tarea 'css' para compilar
// 3. Exporta la tarea default con watch

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
  return src('src/scss/style.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}

function dev() {
  watch('src/**/*.scss', compilarCSS);
}

exports.compilarCSS = compilarCSS;
exports.dev = dev;