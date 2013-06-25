define([
	'timber',
	'config/views'
], function(Timber, views) {

	var routerProperties = {
		routes: {}
	};
	
	_.each(views, function(view, key){
		// saving a reference to a the unique key so
		// we can set a unique className or other ui reference
		// to the app view 
		view.key = key;
		
		if (view.router) {
			
			// add routes
			_.extend(routerProperties.routes, view.router.routes);

			// add function handler of the routes
			_.each(view.router.handlers, function(handler, fnName) {
				routerProperties[fnName] = function() {
					handler.apply(this, _.toArray(arguments));
					this.model.setResource(views[key]);
				};
			});
		}
	});

	var AppRouter = Timber.Router.extend( _.extend(routerProperties, {

		initialize: function(config) {
			this.model = config.model;
		}
		
	}));

	return AppRouter;
});
