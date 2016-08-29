(function() {
	var events = ['PageLoaded', 'NodeCreated'];
	var files = ['https://player.vimeo.com/api/player.js', '/_Resources/Static/Packages/Jonnitto.Plyr/Main.js'];
	document.addEventListener('Neos.ContentModuleLoaded', function() {
		setTimeout(function () {
			require(files, function(Vimeo,plyr) {
				window.Vimeo = {Player: Vimeo};
				window.plyr = plyr;
				initPlyr();
				for (var i = 0; i < events.length; i++) {
					document.addEventListener('Neos.' + events[i], initPlyr);
				}
			});
		}, 100);
	});
})();
