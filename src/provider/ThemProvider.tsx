import React, { ReactNode } from "react";
import { ThemeProvider as StyledComponentThemProvider } from "styled-components";

interface Props {
	children?: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
	return <StyledComponentThemProvider theme={{}}>{children}</StyledComponentThemProvider>;
};

export default ThemeProvider;
