'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const NodeSass = require('node-sass');
const PostcssNested = require('postcss-nested');

module.exports = function(defaults) {
    let app = new EmberApp(defaults, {
        cssModules: {
            includeExtensionInModulePath: true,
            plugins: {
                before: [PostcssNested]
            }
        },

        sassOptions: {
            implementation: NodeSass
        }
    });

    return app.toTree();
};
