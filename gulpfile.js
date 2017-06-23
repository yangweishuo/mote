/**
 * Created by Administrator on 2017/6/23.
 */
var gulp=require('gulp');
var html=require('gulp-minify-html');
var css=require('gulp-clean-css');

gulp.task('html',function () {
    gulp.src('*.html')
        .pipe(html())
        .pipe(gulp.dest('demo'))
});
gulp.task('css',function () {
    gulp.src('./css/*.css')
        .pipe(css())
        .pipe(gulp.dest('demo/css'))
})