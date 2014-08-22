module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-release');

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'dist/delorean.min.js': ['dist/delorean.js']
        }
      }
    },
    browserify: {
      build: {
        options: {
          bundleOptions: {
            standalone: 'DeLorean'
          },
        },
        files: {
          'dist/delorean.js': ['src/delorean.js']
        }
      }
    },
    release: {
      options: {
        files: ['package.json', 'bower.json']
      }
    }
  });

  grunt.registerTask('default', ['browserify:coffeeify', 'uglify']);

};
