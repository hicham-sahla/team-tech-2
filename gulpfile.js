var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var uglifycss = require("gulp-uglifycss");

//Maak van de sass bestanden een css bestand
gulp.task("sass", function () {
  return gulp
    .src("./assets/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/dist/css"));
});

//maak van het css een "ugly" versie
gulp.task("css", async function () {
  gulp
    .src("./public/dist/css/main.css")
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./public/dist/css/dist"));
});

// gedeelte om de tasks te automatiseren en de ugly versie te updaten bij elke aanpassing
gulp.task("run", gulp.series("sass", "css"));

gulp.task("watch", async function () {
  gulp.watch("./assets/scss/*.scss", gulp.series("sass"));
  gulp.watch("./public/dist/css/main.css", gulp.series("css"));
});

gulp.task("default", gulp.series("run", "watch"));
