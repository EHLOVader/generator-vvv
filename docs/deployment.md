# Deployment 
@todo stub

Deployment can be configured using grunt-wordpress-deploy.

It uses keys for the production, staging and local environments.

Within your vvv.json you can add a `deploy` key with values for your production and staging environments. The local environment will be populated automatically.

```
    ...
  	"deploy": {
      production: {
        "database": "database_name",
        "user": "database_username",
        "pass": "database_password",
        "host": "database_host",
        "url": "http://staging_url",
        "path": "/staging_path",
        "ssh_host": "user@staging_host"
      },
      staging: {
        "database": "database_name",
        "user": "database_username",
        "pass": "database_password",
        "host": "database_host",
        "url": "http://staging_url",
        "path": "/staging_path",
        "ssh_host": "user@staging_host"
      }
     }
     ...
```