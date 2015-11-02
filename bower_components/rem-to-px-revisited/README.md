# REM to PX Browser Function using Sass

This Sass function converts [REM](http://caniuse.com/#feat=rem) values to pixels when needed. But instead of generating the CSS property twice in the same CSS file (with both PX and REM units), it provides a way to generate the right unit in the right compiled CSS file. All you need to know about using this function is explained on the [David Walsh's blog](http://davidwalsh.name/rem-px-browser-function-sass).

> _This function helps you to maintain just one file rather than multiple files. It can be seen online on few websites like [RTL.fr](http://www.rtl.fr/), [RTL2.fr](http://www.rtl2.fr/) or [Funradio.fr](http://www.funradio.fr/)._

The goal is to generate two CSS files:
- A CSS file containing REM values.
- A CSS file containing PX values.

## Pros
- Easy to maintain: Just edit your code once, and two separate stylesheets will be generated.
- Easy to read: Your final CSS is clear and without unused properties.
- Lower file size: Your final CSS is lighter.
- Faster to use: Just call u() after the property, e.g. margin:u(5rem);

## Cons
- Needs a hack in the <head> to serve the right stylesheet.

## How to get it
Retrieve it with [Bower](http://bower.io/): `bower install rem-to-px-revisited --save` or just include the [rem-to-px.scss](https://raw.githubusercontent.com/saxinte/rem-to-px-revisited/master/_rem-to-px.scss) file to your Sass project.