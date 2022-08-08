import "@emotion/react";
import { IThemeTokensSchema } from "../theme/themeTokens.type";

export type TComponentSize = "small" | "medium" | "large";
export interface IComponentRenderEnhancer {
	startEnhancer?: TComponentRenderEnhancer;
	endEnhancer?: TComponentRenderEnhancer;
}
export type TComponentRenderEnhancer = React.ReactNode | React.ComponentType<any>;

declare module "@emotion/react" {
	export interface Theme extends IThemeTokensSchema {}
}
