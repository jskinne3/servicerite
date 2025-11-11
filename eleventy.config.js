module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPlugin(require("./config/passthroughs"));

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
