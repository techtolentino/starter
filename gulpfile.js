'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    scsslint = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify');

// Scripts task, uglifies Javascript files
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Styles task, minifies with sourcemaps
gulp.task('styles', function(){
  gulp.src('scss/**/*.scss')
    .pipe(scsslint())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({browsers: 'last 2 versions'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(gulp.dest('build/css'))
});

// Server
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Watch task, watches changes to Javascript and SCSS
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'styles', 'webserver', 'watch']);