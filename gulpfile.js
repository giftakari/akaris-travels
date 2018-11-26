var gulp = require('gulp'),
watch    = require('gulp-watch')


gulp.task('default',function(){

  console.log('congrats we greated our first task');
});

gulp.task('html',function(){
  console.log("Your reliable travel partner");


});

gulp.task('watch',function(){
  watch('./app/index.html',function(){

    gulp.start('html');
  })
});