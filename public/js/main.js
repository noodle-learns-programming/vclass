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
            exports: 'React'
        },
        'io': {
            exports: 'io'
        }
    }
});
require(['modernizr', 'jquery', 'foundation'], function(modernizr, jQuery, foundation)
{
    $(document).foundation();
});
require(['app', 'config/config'], function (App, Config) {
    console.log(Config);
    var app = new App(Config);
    app.bootstrap()
       .run();
});