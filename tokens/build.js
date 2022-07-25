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
	const { x, y, blur, spread, color, alpha } = prop.original.value;
	return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: "darken/css",
  type: "value",
  matcher: function (prop) {
	return prop.attributes.state === "hover-destructive";
  },
  transitive: true,
  transformer: function (prop) {
	return tinycolor(prop.value).darken(8).toString();
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
	return `${fontWeight} ${fontSize} ${fontFamily}`;
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
  "darken/css",
  "font/css",
];

function getStyleDictionaryConfig(platform) {
  return {
	source: [`src/platform/${platform}/*.json`, "src/global/**/*.json"],
	platforms: {
	  web: {
		transforms: webTransforms,
		buildPath: `build/${platform}/`,
		files: [
		  {
			destination: "variables.css",
			format: "css/variables",
			options: {
			  outputReferences: true,
			},
		  },
		  {
			destination: "tokens.js",
			format: "javascript/module",
		  },
		  {
		  	destination: "tokens.json",
		  	format: "json",
		  },
		],
	  },
	  ios: {
		transformGroup: "js",
		buildPath: `build/${platform}/`,
		files: [
		  {
			destination: "tokens.js",
			format: "javascript/module",
		  },
		],
	  },
	  android: {
		transformGroup: "js",
		buildPath: `build/${platform}/`,
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

// PROCESS THE DESIGN TOKENS FOR DIFFERENT PLATFORMS

["web", "ios", "android"].map(function (platform) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${platform}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
	getStyleDictionaryConfig(platform)
  );

  StyleDictionary.buildPlatform(platform);

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");