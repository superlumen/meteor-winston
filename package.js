Package.describe({
  name: 'superlumen:meteor-winston',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A Winston wrapper for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/superlumen/meteor-winston',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    "winston": "2.1.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('meteor-winston.js', 'server');
  api.export('Winston');
});