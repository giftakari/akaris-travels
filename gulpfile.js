var gulp = require('gulp'),
watch    = require('gulp-watch'),
poscss   = require('gulp-post'),
autoprefixer = require('autoprefixer');



gulp.task('default',function(){

  console.log('congrats we greated our first task');
});

gulp.task('html',function(){
  console.log("Your reliable travel partner");


});

gulp.task('styles',function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([autoprefixer])) 
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
  watch('./app/index.html',function(){

    gulp.start('html');
    })
    watch('./app/assets/styles/**/*.css',function(){
      gulp.start('styles')
    })
});