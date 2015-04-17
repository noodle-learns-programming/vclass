require.config({
    "baseUrl": "/public/js",
    "paths": {
        "react"     : "react",
        "jquery"    : "jquery"
    },
    shim: {
        "react": {
            exports: 'React'
        }
    }
});
require(['build/app'], function (App) {
    var app = new App();
    app.init();
});