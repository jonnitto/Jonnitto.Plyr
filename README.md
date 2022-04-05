[![Latest stable version](https://poser.pugx.org/jonnitto/plyr/v/stable)](https://packagist.org/packages/jonnitto/plyr)
[![Total Downloads](https://poser.pugx.org/jonnitto/plyr/downloads)](https://packagist.org/packages/jonnitto/plyr)
[![License](https://poser.pugx.org/jonnitto/plyr/license)](https://packagist.org/packages/jonnitto/plyr)
[![Support development](https://img.shields.io/badge/Donate-PayPal-yellow.svg)](https://www.paypal.me/Jonnitto/20eur)
[![My wishlist on amazon](https://img.shields.io/badge/Wishlist-Amazon-yellow.svg)](https://www.amazon.de/hz/wishlist/ls/2WPGORAVYF39B?&sort=default)  
[![GitHub forks](https://img.shields.io/github/forks/jonnitto/Jonnitto.Plyr.svg?style=social&label=Fork)](https://github.com/jonnitto/Jonnitto.Plyr/fork)
[![GitHub stars](https://img.shields.io/github/stars/jonnitto/Jonnitto.Plyr.svg?style=social&label=Stars)](https://github.com/jonnitto/Jonnitto.Plyr/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/jonnitto/Jonnitto.Plyr.svg?style=social&label=Watch)](https://github.com/jonnitto/Jonnitto.Plyr/subscription)
[![GitHub followers](https://img.shields.io/github/followers/jonnitto.svg?style=social&label=Follow)](https://github.com/jonnitto/followers)
[![Follow Jon on Twitter](https://img.shields.io/twitter/follow/jonnitto.svg?style=social&label=Follow)](https://twitter.com/jonnitto)

# Jonnitto.Plyr

[Plyr.io](http://plyr.io/) for [Neos CMS](https://www.neos.io)

[![Image of Plyr](https://cdn.plyr.io/static/demo/screenshot.png?v=3)](https://plyr.io)

| Version | Neos                     | Maintained |
| ------- | ------------------------ | :--------: |
| 0.\*    | 2.\*                     |     ✗      |
| > 2.2   | 3.\*, 4.\* + 5.\* + 7.\* |     ✗      |
| 3.\*    | 5.3.\* + 7.\* + 8.\*     |     ✓      |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```
composer require jonnitto/plyr --no-update
```

To install the package under Neos 2.\* you have to enter

```
composer require "jonnitto/plyr:^0.2" --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## FAQ

**What are the differences from this package to the [Jonnitto.PrettyEmbedYoutube](https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube), [Jonnitto.PrettyEmbedVideo](https://github.com/jonnitto/Jonnitto.PrettyEmbedVideo), the [Jonnitto.PrettyEmbedVimeo](https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo) the or the [Jonnitto.PrettyEmbedAudio](https://github.com/jonnitto/Jonnitto.PrettyEmbedAudio) package?**

|                     | Jonnitto.Plyr | Jonnitto.PrettyEmbedSeries |
| ------------------- | :-----------: | :------------------------: |
| YouTube Video       |       ✓       |     PrettyEmbedYoutube     |
| YouTube Playlist    |               |     PrettyEmbedYoutube     |
| Vimeo               |       ✓       |      PrettyEmbedVimeo      |
| Native Audio        |       ✓       |      PrettyEmbedAudio      |
| Native Video        |       ✓       |      PrettyEmbedVideo      |
| Preview image       |       ✓       |             ✓              |
| Javascript API      |       ✓       |                            |
| Filesize (JS & CSS) |      big      |           small            |

The PrettyEmbed series also has the benefit of a better frontend performance since the player gets only loaded on request.  
So, no media get loaded until the user wants to consume it.
