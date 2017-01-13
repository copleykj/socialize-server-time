/* eslint-disable no-undef */
Package.describe({
    name: 'socialize:server-time',
    summary: 'Package to compensate for client/server time difference',
    version: '1.0.0',
    git: 'https://github.com/copleykj/socialize-server-time.git',
});

Package.onUse(function _(api) {
    api.versionsFrom('1.3');

    api.use('ecmascript');

    api.mainModule('server/server-time.js', 'server');
    api.mainModule('client/server-time.js', 'client');
});
