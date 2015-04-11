require.config({
    "baseUrl": "/public/js",
    "paths": {
        "react": "react",
        "jquery": "jquery",
        "jsx": "JSXTransformer"
    },
    shim: {
        "JSXTransformer": {
            deps: ['react'],
            exports: 'JSXTransformer'
        },
        "react": {
            exports: 'React'
        }
    }
});
require(['build/app'], function (App) {
    var app = new App();
    app.init();
});