import opacity from "./opacity";
import colors from "./colors";
import radii from "./radii";
import space from "./space";
import typography from "./typography";
import zIndex from "./zIndex";
import sizes from "./sizes";

const themeSemanticToken = {
	colors: { ...colors },
	opacity: { ...opacity },
	space: { ...space },
	radii: { ...radii },
	// sizes: { ...sizes },
	sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	zIndices: { ...zIndex },
	...typography,
	shadows: {},
	time: {
		1: 500,
		2: 300,
		3: 100,
	},
	timeFunction: {
		ease: "ease",
	},
};

export default themeSemanticToken;
