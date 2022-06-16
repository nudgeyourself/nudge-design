const StyleDictionaryPackage = require("style-dictionary");
const tinycolor = require("tinycolor2");

// DEFINE CUSTOM TRANSFORMS FOR WEB

StyleDictionaryPackage.registerTransform({
  name: "shadow/css",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.type === "shadow";
  },
  transitive: true,
  transformer: function (prop) {
    // destructure shadow values from original token value
    const { x, y, blur, spread, color, alpha } = prop.original.value;

    // convert hex code to rgba string
    const shadowColor = tinycolor(color);
    shadowColor.setAlpha(alpha);
    shadowColor.toRgbString();

    return `${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: "font/css",
  type: "value",
  matcher: function (prop) {
    return prop.attributes.type === "text" && prop.attributes.item === "styles";
  },
  transitive: true,
  transformer: function (prop) {
    const { fontFamily, fontSize, fontWeight } = prop.original.value;
    return `${fontWeight} ${fontSize}px ${fontFamily}`;
  },
});

const webTransforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "size/rem",
  "color/css",
  "shadow/css",
  "font/css",
];

function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [
      `tokens/brand/${brand}/*.json`,
      `tokens/platform/${platform}/*.json`,
      "tokens/global/**/*.json",
    ],
    platforms: {
      web: {
        transforms: webTransforms,
        buildPath: `build/${platform}/${brand}/`,
        files: [
          {
            destination: "variables.scss",
            format: "scss/variables",
          },
          {
            destination: "variables.css",
            format: "css/variables",
          },
          {
            destination: "tokens.js",
            format: "javascript/module",
          },
        ],
      },
      ios: {
        transformGroup: "js",
        buildPath: `build/${platform}/${brand}/`,
        files: [
          {
            destination: "tokens.js",
            format: "javascript/module",
          },
        ],
      },
      android: {
        transformGroup: "js",
        buildPath: `build/${platform}/${brand}/`,
        files: [
          {
            destination: "tokens.js",
            format: "javascript/module",
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS AND PLATFORMS

["default"].map(function (brand) {
  ["web", "ios", "android"].map(function (platform) {
    console.log("\n==============================================");
    console.log(`\nProcessing: [${platform}] [${brand}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand, platform)
    );

    StyleDictionary.buildPlatform(platform);

    console.log("\nEnd processing");
  });
});

console.log("\n==============================================");
console.log("\nBuild completed!");
