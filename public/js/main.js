require.config({
    "baseUrl": "/public/js",
    "paths": {
        "react"     : "react",
        "jquery"    : "jquery",
        "io"        : "socket.io"
    },
    shim: {
        "react": {
            exports: 'React'
        },
        'io': {
            exports: 'io'
        }
    }
});
require(['app', 'config/config'], function (App, Config) {
    console.log(Config);
    var app = new App(Config);
    app.bootstrap()
       .run();
});