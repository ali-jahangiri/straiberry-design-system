import React, { ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import themeSemanticToken from "../theme/themeToken";

import { IThemeProviderProps } from "./themeProvider.type";

interface Props {
	children?: ReactNode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }: Props) => {
	return <EmotionThemeProvider theme={themeSemanticToken}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
