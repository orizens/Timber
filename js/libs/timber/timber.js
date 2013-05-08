/**
 * Timber Singleton Framework Class
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'libs/timber/model',
    'libs/timber/view',
    'libs/timber/collectionView',
    'bootstrap'
], function ($, _, Backbone, BaseModel, BaseView, CollectionView ) {

    var Timber = {
        View: BaseView,
        CollectionView: CollectionView,
        Model: Backbone.Model,
        Router: Backbone.Router,
        _:_,
        $:$,

        // a reference to the dictionary's function
        // that will translate a key
        translate: null,

        // reference to the Application's top level modules
        // initiated by App.start
        App: {
            Events: {
                READY: 'app:ready',
                LOGIN: 'app:login',
                LOGOUT: 'app:logout'
            }
        },
        model: null,
        view: null,
        router: null
    };
    // extending Timber's Objects
    Timber.Model.prototype.translate = Timber.translate;
    
    // extends Timber.App to be an app disptacher
    // and uses the Timber.Events events
    _.extend(Timber.App, _.clone(Backbone.Events));
    
    Timber.App.start = function(model, view, router) {
        Timber.model = new model();
        Timber.view = new view({ model: Timber.model });
        Timber.router = new router({ model: Timber.model });
        // register to change events so the model fetches url's 
        Timber.model.start();
        Backbone.history.start();
    };

    //  currently for development purposes
    window.Timber = Timber;
    return Timber;
});