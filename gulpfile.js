var gulp = require('gulp');
var less = require('gulp-less'); // compiles less to CSS
var minify = require('gulp-minify-css'); // minifies CSS
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Paths variables
var paths = {  
  'dev': {
    'less': './src/less/',
    'js': './src/js/',
    'img': './src/img/'
  },
  'assets': {
    'css': './public/css/',
    'js': './public/js/',
    'img': './public/img/'
  }

};

gulp.task('default', ['css', 'js', 'images'], function () {
  gulp.watch(['./src/less/**/*.less'], ['css']);  
  gulp.watch(['./src/js/**/*.js'], ['js']);  
  gulp.watch(['./src/img/**/*'], ['images']);  
});

gulp.task('css', ['globals.css']);
gulp.task('js', ['vendor.js', 'globals.js']);

gulp.task('globals.css', function() {  
  return gulp.src(paths.dev.less+'globals.less') 
    .pipe(less())
    .pipe(gulp.dest(paths.assets.css)) 
    .pipe(minify({keepSpecialComments:0}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.assets.css)); 
});

gulp.task('vendor.js', function () {
  return gulp.src([
        './src/vendor/jquery/dist/jquery.min.js',
        './src/vendor/bootstrap/dist/js/bootstrap.min.js', 
        './src/vendor/bootstrap-validator/dist/validator.min.js',
        './src/vendor/jquery.scrollTo/jquery.scrollTo.min.js',
        './src/vendor/jquery.localScroll/jquery.localScroll.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(paths.assets.js));
});

gulp.task('globals.js', function () {
  return gulp.src(paths.dev.js+'globals/*.js')
    .pipe(concat('globals.js'))
    .pipe(gulp.dest(paths.assets.js));
});

gulp.task('images', function () {
  return gulp.src(paths.dev.img + '*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.assets.img));
});