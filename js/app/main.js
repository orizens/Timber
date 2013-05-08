require([
	'timber',
	'models/ApplicationModel',
	'appRouter',
	'../views/ApplicationView'
],

function (Timber, ApplicationModel, ApplicationRouter, ApplicationView) {

   Timber.App.start(ApplicationModel, ApplicationView, ApplicationRouter);

});