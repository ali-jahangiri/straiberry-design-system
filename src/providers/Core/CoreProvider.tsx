import React from "react";
import BaseStyleProvider from "../BaseStyle";
import GlobalStyleReset from "../GlobalReset";
import ThemeProvider from "../Theme";
import { ICoreProvider } from "./coreProvider.type";

const CoreProvider: React.FC<ICoreProvider> = ({ theme, children }) => (
	<React.Fragment>
		<GlobalStyleReset />
		<ThemeProvider>
			<BaseStyleProvider />
			{children}
		</ThemeProvider>
	</React.Fragment>
);

export default CoreProvider;
