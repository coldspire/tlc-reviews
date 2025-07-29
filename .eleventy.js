export default async function (eleventyConfig) {
  return {
    dir: {
      data: "../_data",
      includes: "../_includes",
      input: "src",
      output: "dist",
    },
  };
}
