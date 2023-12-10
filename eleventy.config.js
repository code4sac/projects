const yaml = require('js-yaml')

/**
 * Configuration for Eleventy.
 * See: /public/documentation/eleventy-configuration.md
 * Supports:
 * - Yaml data files
 *
 * @parameter config Eleventy configuration object.
 * @return The return object is separate from the Eleventy configuration object.
 */
const eleventyConfig = config => {
  config.ignores.add('README.md')
  config.addPassthroughCopy('./public/')
  config.addPassthroughCopy('./node_modules/swiper/')
  config.addDataExtension('yml', contents => yaml.load(contents))
  config.addWatchTarget('./styles/')
  return {
    dir: {
      input: 'content',
      includes: '../_includes'
    },
    compileOptions: {
      cache: false
    }
  }
}

module.exports = eleventyConfig