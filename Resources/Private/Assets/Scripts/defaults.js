// ==========================================================================
// Plyr default config
// ==========================================================================

const defaults = {
    // Disable
    enabled: true,

    // Custom media title
    title: '',

    // Logging to console
    debug: false,

    // Auto play (if supported)
    autoplay: false,

    // Only allow one media playing at once (vimeo only)
    autopause: true,

    // Default time to skip when rewind/fast forward
    seekTime: 10,

    // Default volume
    volume: 1,
    muted: false,

    // Pass a custom duration
    duration: null,

    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,

    // Invert the current time to be a countdown
    invertTime: true,

    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,

    // Aspect ratio (for embeds)
    ratio: '16:9',

    // Click video container to play/pause
    clickToPlay: true,

    // Auto hide the controls
    hideControls: true,

    // Revert to poster on finish (HTML5 - will cause reload)
    showPosterOnEnd: false,

    // Disable the standard context menu
    disableContextMenu: true,

    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: 'plyr',
    iconUrl: '/_Resources/Static/Packages/Jonnitto.Plyr/plyr.svg',

    // Blank video (used to prevent errors on source change)
    blankVideo: '/_Resources/Static/Packages/Jonnitto.Plyr/blank.mp4',

    // Quality default
    quality: {
        default: 576,
        options: [
            4320,
            2880,
            2160,
            1440,
            1080,
            720,
            576,
            480,
            360,
            240,
            'default', // YouTube's "auto"
        ],
    },

    // Set loops
    loop: {
        active: false,
        // start: null,
        // end: null,
    },

    // Speed default and options to display
    speed: {
        selected: 1,
        options: [
            0.5,
            0.75,
            1,
            1.25,
            1.5,
            1.75,
            2,
        ],
    },

    // Keyboard shortcut settings
    keyboard: {
        focused: true,
        global: false,
    },

    // Display tooltips
    tooltips: {
        controls: false,
        seek: true,
    },

    // Captions settings
    captions: {
        active: false,
        language: window.navigator.language.split('-')[0],
    },

    // Fullscreen settings
    fullscreen: {
        enabled: true, // Allow fullscreen?
        fallback: true, // Fallback for vintage browsers
        iosNative: false, // Use the native fullscreen in iOS (disables custom controls)
    },

    // Local storage
    storage: {
        enabled: true,
        key: 'plyr',
    },

    // Default controls
    controls: [
        'play-large',
        // 'restart',
        // 'rewind',
        'play',
        // 'fast-forward',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
    ],
    settings: [
        'captions',
        'quality',
        'speed',
    ],

    // Localisation
    i18n: {
        restart: 'Restart',
        rewind: 'Rewind {seektime} secs',
        play: 'Play',
        pause: 'Pause',
        fastForward: 'Forward {seektime} secs',
        seek: 'Seek',
        played: 'Played',
        buffered: 'Buffered',
        currentTime: 'Current time',
        duration: 'Duration',
        volume: 'Volume',
        mute: 'Mute',
        unmute: 'Unmute',
        enableCaptions: 'Enable captions',
        disableCaptions: 'Disable captions',
        enterFullscreen: 'Enter fullscreen',
        exitFullscreen: 'Exit fullscreen',
        frameTitle: 'Player for {title}',
        captions: 'Captions',
        settings: 'Settings',
        speed: 'Speed',
        quality: 'Quality',
        loop: 'Loop',
        start: 'Start',
        end: 'End',
        all: 'All',
        reset: 'Reset',
        disabled: 'Disabled',
        advertisement: 'Ad',
    },

    // URLs
    urls: {
        vimeo: {
            api: 'https://player.vimeo.com/api/player.js',
        },
        youtube: {
            api: 'https://www.youtube.com/iframe_api',
        },
        googleIMA: {
            api: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
        },
    },

    // Custom control listeners
    listeners: {
        seek: null,
        play: null,
        pause: null,
        restart: null,
        rewind: null,
        fastForward: null,
        mute: null,
        volume: null,
        captions: null,
        fullscreen: null,
        pip: null,
        airplay: null,
        speed: null,
        quality: null,
        loop: null,
        language: null,
    },

    // Events to watch and bubble
    events: [
        // Events to watch on HTML5 media elements and bubble
        // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
        'ended',
        'progress',
        'stalled',
        'playing',
        'waiting',
        'canplay',
        'canplaythrough',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'timeupdate',
        'volumechange',
        'play',
        'pause',
        'error',
        'seeking',
        'seeked',
        'emptied',
        'ratechange',
        'cuechange',

        // Custom events
        'enterfullscreen',
        'exitfullscreen',
        'captionsenabled',
        'captionsdisabled',
        'languagechange',
        'controlshidden',
        'controlsshown',
        'ready',

        // YouTube
        'statechange',
        'qualitychange',
        'qualityrequested',

        // Ads
        'adsloaded',
        'adscontentpause',
        'adscontentresume',
        'adstarted',
        'adsmidpoint',
        'adscomplete',
        'adsallcomplete',
        'adsimpression',
        'adsclick',
    ],

    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
        editable: 'input, textarea, select, [contenteditable]',
        container: '.plyr',
        controls: {
            container: null,
            wrapper: '.plyr__controls',
        },
        labels: '[data-plyr]',
        buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
        },
        inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
        },
        display: {
            currentTime: '.plyr__time--current',
            duration: '.plyr__time--duration',
            buffer: '.plyr__progress--buffer',
            played: '.plyr__progress--played',
            loop: '.plyr__progress--loop',
            volume: '.plyr__volume--display',
        },
        progress: '.plyr__progress',
        captions: '.plyr__captions',
        menu: {
            quality: '.js-plyr__menu__list--quality',
        },
    },

    // Class hooks added to the player in different states
    classNames: {
        video: 'plyr__video-wrapper',
        embed: 'plyr__video-embed',
        ads: 'plyr__ads',
        control: 'plyr__control',
        type: 'plyr--{0}',
        provider: 'plyr--{0}',
        stopped: 'plyr--stopped',
        playing: 'plyr--playing',
        loading: 'plyr--loading',
        error: 'plyr--has-error',
        hover: 'plyr--hover',
        tooltip: 'plyr__tooltip',
        cues: 'plyr__cues',
        hidden: 'plyr__sr-only',
        hideControls: 'plyr--hide-controls',
        isIos: 'plyr--is-ios',
        isTouch: 'plyr--is-touch',
        uiSupported: 'plyr--full-ui',
        noTransition: 'plyr--no-transition',
        menu: {
            value: 'plyr__menu__value',
            badge: 'plyr__badge',
            open: 'plyr--menu-open',
        },
        captions: {
            enabled: 'plyr--captions-enabled',
            active: 'plyr--captions-active',
        },
        fullscreen: {
            enabled: 'plyr--fullscreen-enabled',
            fallback: 'plyr--fullscreen-fallback',
        },
        pip: {
            supported: 'plyr--pip-supported',
            active: 'plyr--pip-active',
        },
        airplay: {
            supported: 'plyr--airplay-supported',
            active: 'plyr--airplay-active',
        },
        tabFocus: 'plyr__tab-focus',
    },

    // Embed attributes
    attributes: {
        embed: {
            provider: 'data-plyr-provider',
            id: 'data-plyr-embed-id',
        },
    },

    // API keys
    keys: {
        google: null,
    },

    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
        enabled: false,
        publisherId: '',
    },
};

export default defaults;
