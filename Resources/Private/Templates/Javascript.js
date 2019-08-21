<![CDATA[(function () {
    var o={]]>
        <f:if condition="{i18n}">{i18n -> f:format.raw()}</f:if>
        <f:if condition="{options.enabled}"><f:else>,enabled:false</f:else></f:if>
        <f:if condition="{options.debug}">,debug:true</f:if>
        <f:if condition="{options.autoplay}">,autoplay:true</f:if>
        <f:if condition="{options.autopause}"><f:else>,autopause:false</f:else></f:if>
        <f:if condition="{options.playsinline}"><f:else>,playsinline:false</f:else></f:if>
        <f:if condition="{options.seekTime} != 10">,seekTime:{options.seekTime}</f:if>
        <f:if condition="{options.volume} != 1">,volume:{options.volume}</f:if>
        <f:if condition="{options.muted}">,muted:true</f:if>
        <f:if condition="{options.duration}">,duration:{options.duration}</f:if>
        <f:if condition="{options.displayDuration}"><f:else>,displayDuration:false</f:else></f:if>
        <f:if condition="{options.invertTime}"><f:else>,invertTime:false</f:else></f:if>
        <f:if condition="{options.toggleInvert}"><f:else>,toggleInvert:false</f:else></f:if>
        <f:if condition="{options.ratio} != '16:9'">,ratio:'{options.ratio}'</f:if>
        <f:if condition="{clickToPlay}"><f:else>,clickToPlay:false</f:else></f:if>
        <f:if condition="{options.hideControls}"><f:else>,hideControls:false</f:else></f:if>
        <f:if condition="{options.resetOnEnd}">,resetOnEnd:true</f:if>
        <f:if condition="{options.disableContextMenu}"><f:else>,disableContextMenu:false</f:else></f:if>
        <f:if condition="{options.loadSprite}"><f:else>,loadSprite:false</f:else></f:if>
        <f:if condition="{options.iconPrefix} != 'plyr'">,iconPrefix:'{options.iconPrefix}'</f:if>
        <f:if condition="{options.iconUrl} != '/_Resources/Static/Packages/Jonnitto.Plyr/plyr.svg'">,iconUrl:'{options.iconUrl}'</f:if>
        <f:if condition="{options.blankVideo} != '/_Resources/Static/Packages/Jonnitto.Plyr/blank.mp4'">,blankVideo:'{options.blankVideo}'</f:if>
        <f:if condition="{quality}">,quality:{quality -> f:format.raw()}</f:if>
        <f:if condition="{options.loop.active}">,loop:{active:true}</f:if>
        <f:if condition="{speed}">,speed:{speed -> f:format.raw()}</f:if>
        <f:if condition="{keyboard}">,keyboard:{keyboard -> f:format.raw()}</f:if>
        <f:if condition="{tooltips}">,tooltips:{tooltips -> f:format.raw()}</f:if>
        <f:if condition="{captions}">,captions:{captions -> f:format.raw()}</f:if>
        <f:if condition="{fullscreen}">,fullscreen:{fullscreen -> f:format.raw()}</f:if>
        <f:if condition="{storage}">,storage:{storage -> f:format.raw()}</f:if>
        <f:if condition="{controls}">,controls:{controls -> f:format.raw()}</f:if>
        <f:if condition="{settings}">,settings:{settings -> f:format.raw()}</f:if>
        <f:if condition="{listeners}">,listeners:{listeners -> f:format.raw()}</f:if>
        <f:if condition="{keys}">,keys:{keys -> f:format.raw()}</f:if>
        <f:if condition="{ads}">,ads:{ads -> f:format.raw()}</f:if>
        <f:if condition="{youtube}">,youtube:{youtube -> f:format.raw()}</f:if>
<![CDATA[
    };
    window.initPlyrMax = 100;
    window.initPlyr = function (event) {
        if (typeof Plyr == 'function') {
            window.neosPlyr = typeof neosPlyr == 'object' ? neosPlyr : [];
            var s = '.neos-plyr', opt = typeof o == 'object' ? o : {}, doc = document, e;
            if (event && event.detail && event.detail.element) {
                doc = event.detail.element;
            }
            e = doc.querySelectorAll(s);
            for (var i = 0; i < e.length; i++) {
                neosPlyr.push(new Plyr(e[i], opt));
            }
        } else {
            if (initPlyrMax--) {
                setTimeout(function () {
                    initPlyr(event)
                }, 100);
            }
        }
    };

    if (!document.querySelector('.neos-backend')) {
        initPlyr();
    }
})();]]>
