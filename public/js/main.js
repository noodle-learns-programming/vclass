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
require(['app'], function (App) {
    var app = new App();
    app.run();
});