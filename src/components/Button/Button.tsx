import React from "react";
import "./Button.scss";

type TComponentSize = "small" | "medium" | "large"; 
interface IComponentRenderEnhancer {
    startEnhancer?: TComponentRenderEnhancer;
    endEnhancer?: TComponentRenderEnhancer;
} 
type TComponentRenderEnhancer = React.ReactNode | React.ComponentType<any>;



type TButtonType = "primary" | "outlined" | "text";


export  interface IButtonProps extends IComponentRenderEnhancer {
    isLoading?: boolean;
    isDisabled?: boolean;
    danger?: boolean;
    block?: boolean;
    type?: TButtonType;
    size?: TComponentSize;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}


function renderEnhancer(Enhancer: TComponentRenderEnhancer) {
  if (typeof Enhancer === "function") return <Enhancer />
  else return Enhancer;
}




const Button: React.FC<IButtonProps> = ({
    type = "primary",
    isDisabled,
    isLoading,
    danger,
    block,
    size = "medium",
    children,
    startEnhancer,
    endEnhancer,
    onClick,
}) => {
    return (
        <button
            disabled={isDisabled}
            className={`button button--${type} button--${size} ${block ? "button--block" : ""} ${danger ? "button--danger" : ""} ${isLoading ? "button--loading" : ""}`}
            onClick={onClick}
        >
            <div className="button__content">
                {endEnhancer && <div className="button__endEnhancer">{renderEnhancer(endEnhancer)}</div>}
                {children}
                {startEnhancer && <div className="button__startEnhancer">{renderEnhancer(startEnhancer)}</div>}
            </div>
            <div className="button__loadingSpinner">
            </div>
        </button>
    )
}


export default Button;