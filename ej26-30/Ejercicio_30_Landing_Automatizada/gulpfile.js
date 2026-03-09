// Configurar Gulp para:
// 1. SASS -> CSS
// 2. JS -> dist/js
// 3. HTML -> dist/
// 4. Watch
// gulpfile.js ultra simple para tu estructura
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compilar SCSS
function styles() {
  return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// Copiar JS
function scripts() {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// Copiar HTML
function html() {
  return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// Watch + servidor
function watchFiles() {
  browserSync.init({ server: { baseDir: 'dist' } });
  watch('src/scss/**/*.scss', styles);
  watch('src/js/**/*.js', scripts);
  watch('src/*.html', html);
}

// Default
exports.default = series(
  parallel(styles, scripts, html),
  watchFiles
);
