const gulp 	= require('gulp'),
	  sass	= require('gulp-sass'),
	  minifyCss = require('gulp-minify-css'),
	  watch	= require('gulp-watch');

gulp.task('sass', ()=>{
	gulp.src('src/styles/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/styles/css'))
})

gulp.task('minifyCss', ()=>{
	gulp.src('src/styles/css/main.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('src/styles/minify'))
})

gulp.task('watch', ()=>{
	gulp.watch('src/styles/main.scss', ['sass'])
	gulp.watch('src/styles/css/main.css', ['minifyCss'])
})