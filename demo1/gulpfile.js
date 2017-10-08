/**
 * Created by Nan on 2017/9/28.
 */
var gulp = require("gulp");
var webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            //端口

            //自动刷新
            livereload: {
                enable: true
            },
            //文件监听
            directoryListing: {
                path: './',
                enable: true
            },
            //自动打开
            open: true,
            fallback: "index.html"
        }))
});
