/* global Package*/
Package.describe({
    name: 'socialize:server-time',
    summary: 'Package to compensate for client/server time difference',
    version: '1.0.1',
    git: 'https://github.com/copleykj/socialize-server-time.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use('ecmascript');

    api.mainModule('server/server-time.js', 'server');
    api.mainModule('client/entry-meteor.js', 'client');
});
