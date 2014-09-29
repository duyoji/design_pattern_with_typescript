/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    //
    // js: {
    //   vendor: [
    //     "vendor/js/underscore.js",
    //     "vendor/js/**/*.js"
    //   ]
    // }

      js: {
          vendor: [
              //"vendor/js/**/*.js",
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/lodash/dist/lodash.min.js",
              "node_modules/backbone/backbone-min.js",
              "node_modules/backbone.marionette/node_modules/backbone.wreqr/lib/backbone.wreqr.js",
              "node_modules/backbone.marionette/node_modules/backbone.babysitter/lib/backbone.babysitter.js",
              "node_modules/backbone.marionette/lib/backbone.marionette.js",
              "node_modules/es6-promise/dist/promise-1.0.0.min.js"
          ]
      }

  };
};
