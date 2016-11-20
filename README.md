# README.md
This is a simple taglib for [Marko.js](http://markojs.com) ([github.com/marko-js/marko](https://github.com/marko-js/marko)) which adds `<let>` and `<const>` tags, using functionality which was already built into the compiler but never exposed through built-in tags.

The reason for this being a separate package is to allow developers to experiment with these tags without breaking compatibility, as discussed in [marko-js/marko/#428](https://github.com/marko-js/marko/pull/428). If and when these tags are added the Marko compiler or an official taglib, this package is to be considered deprecated.

## Usage
The `<let>` and `<const>` tags are functionally identical to the built-in `<var>` tag (as of Marko v3.12.0) except that they generate the `let` and `const` keywords rather than `var` in the compiled output.

