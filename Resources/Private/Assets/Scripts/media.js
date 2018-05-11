// ==========================================================================
// Plyr Media
// ==========================================================================

import html5 from './html5';
import vimeo from './plugins/vimeo';
import youtube from './plugins/youtube';
import utils from './utils';

const media = {
    // Setup media
    setup() {
        // If there's no media, bail
        if (!this.media) {
            this.debug.warn('No media element found!');
            return;
        }

        // Add type class
        utils.toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', this.type), true);

        // Add provider class
        utils.toggleClass(this.elements.container, this.config.classNames.provider.replace('{0}', this.provider), true);

        // Add video class for embeds
        // This will require changes if audio embeds are added
        if (this.isEmbed) {
            utils.toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', 'video'), true);
        }

        // Inject the player wrapper
        if (this.isVideo) {
            // Create the wrapper div
            this.elements.wrapper = utils.createElement('div', {
                class: this.config.classNames.video,
            });

            // Wrap the video in a container
            utils.wrap(this.media, this.elements.wrapper);

            // Faux poster container
            this.elements.poster = utils.createElement('div', {
                class: this.config.classNames.poster,
            });

            this.elements.wrapper.appendChild(this.elements.poster);
        }

        if (this.isEmbed) {
            switch (this.provider) {
                case 'youtube':
                    youtube.setup.call(this);
                    break;

                case 'vimeo':
                    vimeo.setup.call(this);
                    break;

                default:
                    break;
            }
        } else if (this.isHTML5) {
            html5.extend.call(this);
        }
    },
};

export default media;
