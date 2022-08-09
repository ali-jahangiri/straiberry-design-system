import { ReactNode } from "react";

export interface IFormProps extends Omit<HTMLFormElement, "children"> {
    children?: ReactNode;
}
