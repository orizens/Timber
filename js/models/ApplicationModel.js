/* This is the Application's Core Model
 * It holds all models that represents resources of the application
 * retrieved from any provider
 *
 * Guidelines:
 * - Each Model/Collection should retrieve its data from its 'url' (Backbone)
 * - Each Model/Collection may expose api methods to retrieve sub models/collections
 *
 */
define([
	'timber',
	'./Dashboard/DashboardModel'
], function (Timber,
		DashboardModel
	) {

	var ApplicationModel = Backbone.Model.extend({

		defaults: {
			// {Backbone.Model} should store application settings, i.e:
			// retrieve json mock up (debug)
			config: {},
			// {string} - indicates the current resource state:
			resource: null,
			// Additional parameters of the resource;
            dashboard: new DashboardModel()

		},

		initialize: function () {

		},

		// runs after all MVC modules of timber has been started
		start: function() {
			
		},

		/**
		 * convenience set methods for models/collections
		 */
		setResource: function (resource) {
			this.set('resource', resource);
		},

		//
		// Change Handlers
		//
		/**
		 * calls a REST call to all models in resources.model
		 * @param  {Backbone.Model} model - 'this' application model
		 * @param  {object} resource - contains entries: view, model {array}, collection etc (defined in pages.js)
		 */
		fetchResources: function (resource) {
			resource = resource ? resource : this.get('resource');
			// request REST of the resource's models
			_.each(resource.model, function (submodel) {
				this.get(submodel).fetch();
			}, this);

			// request REST of the resource's collections
			_.each(resource.collection, function (subcol) {
				this.get(subcol).fetch();
			}, this);
		}

	});

	return ApplicationModel;
});