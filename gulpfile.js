var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('sass', function () {
    return gulp.src('./style/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style'))
});

gulp.task('watch:scss', function () {
    gulp.watch('./style/app.scss', ['sass']);
});

gulp.task('webserver', ['sass'], function () {
    gulp.src('./')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

gulp.task('default', ['watch:scss', 'webserver']);
