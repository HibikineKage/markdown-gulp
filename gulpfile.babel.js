import gulp from 'gulp';
import markdown from 'gulp-markdown';
import plumber from 'gulp-plumber';

gulp.task('watch', ['md'], () => {
  gulp.watch('src/*.md', ['md']);
});

gulp.task('md', () => {
  return gulp.src('src/*.md')
    .pipe(plumber())
    .pipe(markdown())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['md']);
