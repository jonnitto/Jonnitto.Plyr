// jshint ignore:start
(function(){
	var o={
		i18n:{
			<f:for each="{i18n}" as="key" iteration="iteration">
				{key}:'<f:translate package="Jonnitto.Plyr" id="{key}" />'<f:if condition="{iteration.isLast}"><f:else>,</f:else></f:if>
			</f:for>
		}
	};
	<f:if condition="{controls}">o.controls={controls -> f:format.raw()};</f:if>
	<f:if condition="{options.autoplay}">o.autoplay=true;</f:if>
	<f:if condition="{options.seekTime} != 10">o.seekTime={options.seekTime};</f:if>
	<f:if condition="{options.volume} != 10">o.volume={options.volume};</f:if>
	<f:if condition="{options.clickToPlay"><f:else>o.clickToPlay=false;</f:else></f:if>
	<f:if condition="{options.hideControls"><f:else>o.hideControls=false;</f:else></f:if>
	<f:if condition="{options.showPosterOnEnd}">o.showPosterOnEnd=true;</f:if>
	<f:if condition="{options.tooltips.controls}">
		<f:then>
			<f:if condition="{options.tooltips.seek}">
				<f:then>o.tooltips={controls:true};</f:then>
				<f:else>o.tooltips={controls:true,seek:false};</f:else>
			</f:if>
		</f:then>
		<f:else>
			<f:if condition="{options.tooltips.seek}">
				<f:else>o.tooltips={seek:false};</f:else>
			</f:if>
		</f:else>
	</f:if>
	<f:if condition="{options.displayDuration"><f:else>o.displayDuration=false;</f:else></f:if>
	<f:if condition="{options.fullscreen.enabled}">
		<f:then>
			<f:if condition="{options.fullscreen.fallback}">
				<f:then>
					<f:if condition="{options.fullscreen.allowAudio}">o.fullscreen={allowAudio:true};</f:if>
				</f:then>
				<f:else>
					<f:if condition="{options.fullscreen.allowAudio}">
						<f:then>o.fullscreen={fallback:false,allowAudio:true};</f:then>
						<f:else>o.fullscreen={fallback:false};</f:else>
					</f:if>
				</f:else>
			</f:if>
		</f:then>
		<f:else>o.fullscreen={enabled:false};</f:else>
	</f:if>
	window.initPlyr = function() {
		if (typeof plyr == 'object') {
			var opt = typeof o == 'object' ? o : {};
			var players = plyr.get();
			var length = players.length;
			var timeout = length ? 500 : 0;
			for (var i = 0; i < length; i++) {
				try {players[i].destroy()} catch (e) {}
			}
			setTimeout(function () {
				window.neosPlyr = plyr.setup('.neos-plyr', opt);
			}, timeout);
		} else {
			setTimeout(initPlyr, 50);
		}
	};
	if (!document.querySelector('.neos-backend')) {
		initPlyr();
	}
})();
