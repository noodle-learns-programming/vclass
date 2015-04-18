require.config({
    "baseUrl": "/public/js",
    "paths": {
        "react"         : "react",
        "jquery"        : "jquery",
        "io"            : "socket.io",
        "foundation"    : "foundation.min",
        "modernizr"     : "vendor/modernizr"
    },
    shim: {
        "react": {
            exports : 'React'
        },
        'io': {
            exports : 'io'
        },
        'foundation' : {
            deps    : ['modernizr']
        }
    }
});
require(['foundation'], function()
{
    $(document).foundation();
});
require(['app', 'config/config'], function (App, Config) {
    var app     = new App(Config);
    window.app  = app;
    app.bootstrap()
       .run();
});