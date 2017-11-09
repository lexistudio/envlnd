var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('css', function () {
  gulp.src('./assets/css/stylus/app.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  watch('./assets/css/stylus/**/*.styl', function(event) {
    gulp.start('css');
  });
});

gulp.task('default', ['css','watch']);