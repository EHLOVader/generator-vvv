module.exports = {
            options: {
                backup_dir: "backups/",
                    rsync_args: ['--verbose', '--progress', '-rlpt', '--compress', '--omit-dir-times', '--delete'],
                    exclusions: ['Gruntfile.js', '.git/', 'tmp/*', 'backups/', 'wp-config.php', 'composer.json', 'composer.lock', 'README.md', '.gitignore', 'package.json', 'node_modules']
            },
<%
    if ('object' === typeof deploy) {
        if ( 'object' === typeof deploy.staging )
        {
%>            staging: {
                "title": "staging",
                    "database": '<%= deploy.staging.database %>',
                    "user": '<%= deploy.staging.user %>',
                    "pass": '<%= deploy.staging.pass %>',
                    "host": '<%= deploy.staging.host %>',
                    "url": '<%= deploy.staging.url %>',
                    "path": '<%= deploy.staging.path %>',
                    "ssh_host": '<%= deploy.staging.ssh_host %>'
            },

<%
        }

        if ( 'object' === typeof deploy.production )
        {
%>
            production: {
                "title": "prod",
                    "database": '<%= deploy.production.database %>',
                    "user": '<%= deploy.production.user %>',
                    "pass": '<%= deploy.production.pass %>',
                    "host": '<%= deploy.production.host %>',
                    "url": '<%= deploy.production.url %>',
                    "path": '<%= deploy.production.path %>',
                    "ssh_host": '<%= deploy.production.ssh_host %>'
            },
<%
        }
    }
%>
            local: {
                "title": "local",
                    "database": '<%= site.id %>',
                    "user": 'external',
                    "pass": 'external',
                    "host": '<%= site.url %>',
                    "url": '<%=  site.url %>',
                    "path": 'htdocs/'
            }
        }
