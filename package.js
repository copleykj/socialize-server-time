Package.describe({
    name: "socialize:server-time",
    summary: "Package to compensate for client/server time difference",
    version: "0.1.1",
    git:"https://github.com/copleykj/socialize-server-time.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    //Add the server-time files
    api.addFiles("common/server-time.js");
    api.addFiles("client/server-time.js", "client");
    api.addFiles("server/server-time.js", "server");


    api.export(["ServerTime"]);
});