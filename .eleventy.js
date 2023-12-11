const yaml = require('js-yaml')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

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
  config.addPassthroughCopy('public')
  config.addDataExtension('yml', contents => yaml.load(contents))
  config.addWatchTarget('./styles/')
  config.addPlugin(EleventyHtmlBasePlugin)
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