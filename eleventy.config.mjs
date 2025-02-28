export default function(eleventyConfig)
{
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.addPassthroughCopy("./src/assets");
}
