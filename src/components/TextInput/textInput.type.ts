import React from "react";
import { IComponentRenderEnhancer, TComponentSize } from "../../types/base.type";

type TInputBaseProps = Omit<React.ComponentPropsWithoutRef<"input">, "size" | "onChange">;

export interface ITextInputProps extends TInputBaseProps, IComponentRenderEnhancer {
	errorMessage?: string;
	haveError?: boolean;
	size?: TComponentSize;
	label?: string;
	onChange?: (value: string) => void;
}
