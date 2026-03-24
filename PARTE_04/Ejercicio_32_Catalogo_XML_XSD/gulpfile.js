const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function watchFiles() {
  gulp.watch('src/scss/**/*.scss', styles);
}

exports.default = gulp.series(styles, watchFiles);