var gulp    = require('gulp')
var connect = require('gulp-connect')
var watch   = require('gulp-watch')
var sass    = require('gulp-sass')
var gutil   = require('gulp-util')

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
  })
})

gulp.task('watch', function() {
  watch({
    glob: [
      'app/index.html',
      'app/styles/**/*.css',
      'app/scripts/**/*.js',
      'app/images/**/*.*',
    ]
  }).pipe(connect.reload())

  watch({
    glob: [
      'sass/**/*.scss'
    ]
  }, ['sass'])
})

gulp.task('sass', function() {
  gulp.src('sass/main.scss')
      .pipe(sass())
      .on('error', function(error) {
        gutil.log(error.message)
      })
      .pipe(gulp.dest('app/styles'))
})

gulp.task('default', [
  'connect',
  'watch',
])
