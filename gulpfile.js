const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

const genNodemonConfig = ({ script, env, done }) => ({
  script,
  ext: 'js json yml',
  ignore: ['logs', 'node_modules', 'client'],
  env: {
    NODE_ENV: 'development',
    ...env,
  },
  done,
});

const devApp = (done) => {
  nodemon(
    genNodemonConfig({
      script: 'index.js',
      done,
    }),
  );
};

gulp.task('devApp', devApp);
