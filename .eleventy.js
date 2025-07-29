import { VentoPlugin } from "eleventy-plugin-vento";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(VentoPlugin, {
    // An array of Vento plugins to use when compiling
    plugins: [],

    // Enable/disable Eleventy Shortcodes, Paired Shortcodes,
    // and Filters in .vto templates
    shortcodes: true,
    pairedShortcodes: true,
    filters: true,

    // Define tags that should be trimmed, or set to true
    // to trim the default tags (see section on Auto-trimming)
    autotrim: false,

    // A Vento configuration object
    ventoOptions: {
      includes: eleventyConfig.directories.includes,
    },
  });

  return {
    dir: {
      data: "../_data",
      includes: "../_includes",
      input: "src",
      output: "dist",
    },
  };
}
