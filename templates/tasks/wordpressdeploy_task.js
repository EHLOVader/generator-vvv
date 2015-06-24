module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-wordpress-deploy');

    grunt.registerTask('deploy', function (target) {
        if (target == null) {
            grunt.warn('deploy target must be specified, like deploy:staging.');
        }
        grunt.option('target', target);
        grunt.task.run.apply(grunt.task, ['push_files', 'push_db', 'create_config']);

    });

}