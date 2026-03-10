const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// SCSS → CSS
function styles() {
  return src('src/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// JS → dist/js
function scripts() {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// HTML → dist
function html() {
  return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// Servidor + Watch
function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  watch('src/scss/*.scss', styles);
  watch('src/js/*.js', scripts);
  watch('src/*.html', html);
}

// Default
exports.default = series(
  parallel(styles, scripts, html),
  serve
);