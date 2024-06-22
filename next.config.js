const withMDX = require("@next/mdx")()

module.exports = (phase, { defaultConfig }) => {
  return withMDX({
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  })
}