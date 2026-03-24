const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarSass() {
  return gulp.src('./scss/_form.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./scss'));
}

function watch() {
  gulp.watch('./scss/**/*.scss', compilarSass);
}

exports.default = gulp.series(compilarSass, watch);