module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		jshint: {
            files: ['gruntfile.js', 'app/src/*.js'],
            options: {
                maxlen: 80,
                quotmark: 'single'
            }
        }
    });
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
};