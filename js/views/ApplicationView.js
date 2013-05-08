define([
	'timber',
	/* resources are defined here */
	'config/views'

], function(Timber, views) {

	var ApplicationView = Timber.View.extend({
		el: '#container',

		// reference to the current view instance
		currentView: '',

		initialize: function() {

			this.$body = $('body');
			this.$target = this.$('#content');
			// layout managing
			this.listenTo(this.model, 'change:resource', this.handleResource);
		},

		appendViews: function(excludes) {
			var viewsNames = _.without(_.keys(this.views), excludes);
			_.each( viewsNames, this.appendView, this );
		},

		appendView: function(viewName) {
			this.$body.append( this.views[viewName].el );
		},

		handleResource: function(model, resource) {
			if (this.currentView) {
				this.currentView.destroy();
			}
			this.updateIdentifier();
			this.model.setResource(resource);
			require(['../views/' + resource.view], _.bind(this.render, this));
		},

		render: function(view) {
			// this.toggleModules();
			this.$el.addClass(this.model.get('resource').key);
			this.currentView = new view({
				model: this.model
			});
			this.currentView.$el.addClass('span12');

			this.$target.empty().append( this.currentView.render().el );
			this.model.fetchResources();
			return this;
		},

		updateIdentifier: function() {
			this.$el.removeClass(this.model.get('resource').key);
		},

		// hide/show Application View views based on configuration of a resource 'disable' property
		toggleModules: function() {
			var disable = this.currentResource.disable || [];
			_.each(disable, this.toggleModule, this);
		},

		toggleModule: function(viewName, index, disableList){
			if (_.has(this.views, viewName)) {
				// disable the views
				this.views[viewName].disable();
			} else {
				//- enable the others
				this.views[viewName].enable();
			}
		}
	});

	return ApplicationView;
});
