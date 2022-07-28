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

StyleDictionaryPackage.registerTransform({
  name: "figma",
  type: "value",
  matcher: function (prop) {
	 if (prop.type === "typography") {console.log(prop);}
	return prop.type === "typography";
  },
  transitive: true,
  transformer: function (prop) {
	const { fontFamily, fontSize, fontWeight } = prop.value;
	
	var figmaFriendlyWeight;
	
	switch (fontWeight) {
		case "400":
			figmaFriendlyWeight =  "Regular";
			break;
		case "500":
			figmaFriendlyWeight =  "Medium";
			break;
		case "800":
			figmaFriendlyWeight =  "Bold";
			break;
		default:
			figmaFriendlyWeight = fontWeight;
	}
	
	const  figmaFriendlyFontSize = fontSize.substr(0,fontSize.length-2);
	console.log({fontFamily: fontFamily, fontSize:figmaFriendlyFontSize, fontWeight: figmaFriendlyWeight});
	return {fontFamily: fontFamily, fontSize:figmaFriendlyFontSize, fontWeight: figmaFriendlyWeight};
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

const figmaTransforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "size/rem",
  "color/css",
  "darken/css",
  "figma",
];

function getStyleDictionaryConfig(platform, buildForFigma) {
  return {
	source: [`src/platform/${platform}/*.json`, "src/global/**/*.json"],
	platforms: {
	  web: {
		transforms: buildForFigma ? figmaTransforms : webTransforms,
		buildPath: buildForFigma ?  `build/figma/${platform}/` : `build/${platform}/`,
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
		  	options: {
			  outputReferences: true,
		  	},
		  },
		],
	  },
	  ios: {
		transformGroup: "js",
		buildPath: buildForFigma ?  `build/figma/${platform}/` : `build/${platform}/`,
		files: [
		  {
			destination: "tokens.js",
			format: "javascript/module",
		  },
		],
	  },
	  android: {
		transformGroup: "js",
		buildPath: buildForFigma ?  `build/figma/${platform}/` : `build/${platform}/`,
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
	getStyleDictionaryConfig(platform, false)
  );

  StyleDictionary.buildPlatform(platform);
  
  const FigmaStyleDictionary = StyleDictionaryPackage.extend(
  	getStyleDictionaryConfig(platform, true)
  );
  
  FigmaStyleDictionary.buildPlatform(platform);

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");