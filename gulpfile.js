var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var browserify  = require('gulp-browserify');

//ブラウザ
gulp.task('browserSync',function(){
	browserSync({
		server: {
			baseDir: 'app/'
		}
	});
});
gulp.task('sass', function () {
	gulp.src('development/styles/**/*.scss')
	.pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/css/'))
  .pipe(browserSync.stream());
});

gulp.task('browserify', function() {
  gulp.src('development/js/**/*.js')
    .pipe(gulp.dest('./app/js/'))
});

gulp.task('watch', ['watch', 'browserSync', 'sass', 'browserify'],function(){
    gulp.watch('development/styles/**/*.scss', ['sass']);
    gulp.watch('development/js/**/*.js', ['browserify']);
});
gulp.task("default",['watch', 'browserSync', 'sass', 'browserify']);
