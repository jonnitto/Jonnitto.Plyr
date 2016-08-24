// jshint ignore:start
(function(){
	var o={
		i18n:{
			<f:for each="{i18n}" as="key" iteration="iteration">
				{key}:'<f:translate package="Jonnitto.Plyr" id="{key}" />'<f:if condition="{iteration.isLast}"><f:else>,</f:else></f:if>
			</f:for>
		}
	};
	<f:if condition="{options.controls} != '['play-large','play','progress','current-time','mute','volume','captions','fullscreen']'">o.controls={options.controls};</f:if>
	<f:if condition="{options.autoplay}">o.autoplay=true;</f:if>
	<f:if condition="{options.seekTime} != 10">o.seekTime={options.seekTime};</f:if>
	<f:if condition="{options.volume} != 5">o.volume={options.volume};</f:if>
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
	var p=function(){plyr.setup('.neos-plyr',o)};p();
	if(document.querySelector('.neos-backend')){
		var e = ['PageLoaded','ContentModuleLoaded'];
		var l = e.length;
		while(l--){document.addEventListener('Neos.' + e[l],p);}
	}
})();