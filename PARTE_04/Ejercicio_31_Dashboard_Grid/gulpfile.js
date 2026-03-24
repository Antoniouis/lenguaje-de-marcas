const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('src/scss/**/*.scss') // ← aquí
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // ← aquí
}

function watchFiles() {
  gulp.watch('src/scss/**/*.scss', styles);
}

exports.default = gulp.series(styles, watchFiles);