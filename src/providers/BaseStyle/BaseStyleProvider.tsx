import { css, Global } from "@emotion/react";
import React from "react";

import regularFont from "../../assets/font/iranyekanweblightfanum.woff";
import lightFont from "../../assets/font/iranyekanweblightfanum.woff";
import boldFont from "../../assets/font/iranyekanwebboldfanum.woff";
import { IThemeTokensSchema } from "../../theme/themeTokens.type";

const baseStyle = (theme: IThemeTokensSchema) => css`
	@font-face {
		font-family: "iranyekan";
		src: url(${lightFont}) format("woff");
		font-weight: ${theme.fontWeights.light};
	}

	@font-face {
		font-family: "iranyekan";
		src: url(${regularFont}) format("woff");
		font-weight: ${theme.fontWeights.semibold};
	}

	@font-face {
		font-family: "iranyekan";
		src: url(${boldFont}) format("woff");
		font-weight: ${theme.fontWeights.bold};
	}

	body {
		font-family: "iranyekan";
		font-weight: ${theme.fontWeights.bold};
		direction: rtl;
	}
`;

const BaseStyleProvider = () => {
	return <Global styles={baseStyle} />;
};

export default BaseStyleProvider;
