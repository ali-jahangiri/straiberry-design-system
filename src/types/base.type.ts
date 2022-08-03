export type TComponentSize = "small" | "medium" | "large";
export interface IComponentRenderEnhancer {
	startEnhancer?: TComponentRenderEnhancer;
	endEnhancer?: TComponentRenderEnhancer;
}
export type TComponentRenderEnhancer = React.ReactNode | React.ComponentType<any>;
