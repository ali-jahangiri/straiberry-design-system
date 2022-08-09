import { SerializedStyles } from "@emotion/react";
import { IThemeTokensSchema } from "../theme/themeTokens.type";

type TStyleCallback = (theme: IThemeTokensSchema) => () => SerializedStyles;

const stylesheetCreator = (styleCb: TStyleCallback) => (props: { theme: IThemeTokensSchema }) => styleCb(props.theme);

export default stylesheetCreator;
