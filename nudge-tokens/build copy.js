const StyleDictionary = require("style-dictionary");
const tinycolor = require("tinycolor2");

StyleDictionary.registerTransform({
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

StyleDictionary.registerTransform({
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

const myStyleDictionary = StyleDictionary.extend({
  source: ["tokens/defaults/**/*.json"],
  platforms: {
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "shadow/css",
        "font/css",
      ],
      buildPath: "build/web/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "shadow/css",
        "font/css",
      ],
      files: [
        {
          format: "css/variables",
          destination: "build/web/css/variables.css",
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "build/web/js/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/module",
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();

// You can also extend Style Dictionary multiple times:
const myOtherStyleDictionary = myStyleDictionary.extend({
  source: ["tokens/**/*.json"],
  platforms: {
    javascript: {
      transformGroup: "js",
      buildPath: "build/android/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/module",
        },
      ],
    },
  },
});

myOtherStyleDictionary.buildAllPlatforms();
