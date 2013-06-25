require([
	'timber',
	'models/ApplicationModel',
	'router',
	'views/ApplicationView'
],

function (Timber, ApplicationModel, ApplicationRouter, ApplicationView) {

   Timber.App.start(ApplicationModel, ApplicationView, ApplicationRouter);

});