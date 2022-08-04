import React from "react";
import { IComponentRenderEnhancer, TComponentSize } from "../../types/base.type";

type TButtonType = "primary" | "outlined" | "text";

type TButtonBaseProps = Omit<React.ComponentPropsWithoutRef<"button">, "type">;

export interface IButtonProps extends TButtonBaseProps, IComponentRenderEnhancer {
	isLoading?: boolean;
	isDisabled?: boolean;
	danger?: boolean;
	block?: boolean;
	type?: TButtonType;
	size?: TComponentSize;
}
