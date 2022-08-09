import opacity from "./opacity";
import colors from "./colors";
import radii from "./radii";
import space from "./space";
import typography from "./typography";
import zIndex from "./zIndex";
import sizes from "./sizes";
import animate from "./animate";

const themeSemanticToken = {
	colors: { ...colors },
	opacity: { ...opacity },
	space: { ...space },
	radii: { ...radii },
	sizes: { ...sizes },
	zIndices: { ...zIndex },
	...typography,
	...animate,
	shadows: {},
};

export type TThemeToken = typeof themeSemanticToken;
export default themeSemanticToken;
