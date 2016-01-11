# comicbooks

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular) version 0.14.0 and am using the ~~[Marvel API](https://developer.marvel.com/)~~ [Comic Vine](http://www.comicvine.com/api) to fetch my data. Marvel API was too slow so that's why I switched to Comic Vine.

Project is using [Angular-Material](https://material.angularjs.org/latest/) for the grid/styling.

Used localstorage to save API calls to avoid reaching API limit(calls get saved for 60 minutes).

The project can be viewed online here: [Online version](http://mahammedkhan.be/comics-material)

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
