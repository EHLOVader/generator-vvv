module.exports = {
            options: {
                backup_dir: "backups/",
                    rsync_args: ['--verbose', '--progress', '-rlpt', '--compress', '--omit-dir-times', '--delete'],
                    exclusions: ['Gruntfile.js', '.git/', 'tmp/*', 'backups/', 'wp-config.php', 'composer.json', 'composer.lock', 'README.md', '.gitignore', 'package.json', 'node_modules']
            },
            local: {
                "title": "local",
                    "database": '<%= site.db_name %>', //Needs implemented
                    "user": '<%= site.db_user %>',
                    "pass": '<%= site.db_pass %>',
                    "host": '<%= site.db_host %>',
                    "url": '<%=  site.url %>',
                    "path": process.cwd() + '/htdocs'
            },
            staging: {
                "title": "staging",
                    "database": '<%= deploy.staging.db_name %>',
                    "user": '<%= deploy.staging.db_user %>',
                    "pass": '<%= deploy.staging.db_pass %>',
                    "host": '<%= deploy.staging.db_host %>',
                    "url": '<%= deploy.staging.url %>',
                    "path": '<%= deploy.staging.path %>',
                    "ssh_host": '<%= deploy.staging.ssh_host %>'
            },
            production: {
                "title": "prod",
                    "database": '<%= deploy.production.db_name %>',
                    "user": '<%= deploy.production.db_user %>',
                    "pass": '<%= deploy.production.db_pass %>',
                    "host": '<%= deploy.production.db_host %>',
                    "url": '<%= deploy.production.url %>',
                    "path": '<%= deploy.production.path %>',
                    "ssh_host": '<%= deploy.production.ssh_host %>'
            }

        }