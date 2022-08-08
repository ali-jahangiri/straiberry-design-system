import React, { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import themeSemanticToken from "../../theme/themeToken";

interface Props {
	children?: ReactNode;
}

const ThemeProvider: React.FC<Props> = props => {
	return <EmotionThemeProvider theme={themeSemanticToken}>{props.children}</EmotionThemeProvider>;
};

export default ThemeProvider;
