module.exports = function(eleventyConfig){
    //Defining CSS Support
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");

    //Handlebars inclussion
    let handlebars = require("handlebars");
    eleventyConfig.setLibrary("hbs", handlebars);
    
    //Mustache lib inclussion
    let mustache = require("mustache");
    eleventyConfig.setLibrary("mustache", mustache);
    return {
        dir: {
            input: "src",
        },
    };
};