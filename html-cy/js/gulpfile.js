var gulp = require("gulp");
var webServer = require("gulp-webserver");
//新建任务
gulp.task("house", function() {
    gulp.src(".")
        .pipe(webServer({
            port: 3000,
            middlewear: function(req, res, nex) {
                console.log(req.url);
                res.end();
            }
        }))
})