var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('make', function() {
    gulp
        .src(['html/**/*.html', '!html/**/_*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '../../html'
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('reload', function() {
    gulp
        .src(['*.html'])
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    watch({glob: 'html/**/*.html'}, ['make']);
});

gulp.task('watchReload', function() {
    watch({glob: '**.html'}, ['reload']);
});

gulp.task('default', ['connect', 'watch', 'watchReload']);
