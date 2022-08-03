import React from "react";
import { IComponentRenderEnhancer, TComponentSize } from "../../types/base.type";

type TInputBaseProps = Omit<React.ComponentPropsWithoutRef<"input">, "size">

export interface ITextInputProps extends TInputBaseProps, IComponentRenderEnhancer {
    errorMessage?: string;
    haveError?: boolean;
    size?: TComponentSize;
}