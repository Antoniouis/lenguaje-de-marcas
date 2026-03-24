const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
}

function watchFiles() {
    gulp.watch('src/scss/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watchFiles;
exports.default = gulp.series(styles, watchFiles);