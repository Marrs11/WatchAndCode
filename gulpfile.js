var gulp = require('gulp'),
    watch = require('gulp-watch'),
    /*postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),*/
    browserSync = require('browser-sync').create();

gulp.task('styles', function () {
    return gulp.src('app/assets/css/styles.css')
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('app/temp/css'));
});

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('app/index.html', function () {
        browserSync.reload();
    });

    watch('app/assets/css/**/*.css', function () {
        gulp.start('cssInject');
    });

    watch('app/temp/css/styles.css', function () {
        browserSync.reload();
    });
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('app/temp/css/styles.css')
        .pipe(browserSync.stream());
});
