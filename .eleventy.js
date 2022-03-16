module.exports = function(eleventyConfig){
    //Defining CSS Support
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");
    //JS support
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");
    //Images support
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addWatchTarget("./src/img");
    //Using handlebars config
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
    let mustache = require("mustache");
    eleventyConfig.setLibrary("mustache", mustache);
    return {
        dir: {
            input: "src",
        },
    };
};