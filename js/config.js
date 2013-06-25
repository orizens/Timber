require.config({
    //- initialize the application from the main file
    deps: ['main'],


    paths: {
        //- application aliases
        libs: 'libs',
        config: 'config',
        models: 'models',
        //- libraries
        jquery:'libs/jquery/jquery-min',
        underscore:'libs/underscore/underscore',
        backbone:'libs/backbone/backbone',
        bootstrap:'libs/bootstrap/bootstrap',
        text:'libs/require/text',
        timber: 'libs/timber/timber'
        // api: '../mock'
    },

    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: '$'
        },

        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    map : {
        // '*' : {
        //     'backbone' : 'safe'
        // }
    }

});