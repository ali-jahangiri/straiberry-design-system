import { ReactNode } from "react";
import BreadcrumbItem from "./BreadcrumbItem";

export interface IBreadcrumbGroupProps {
    separator?: ReactNode;
    children?: ReactNode;
}

export interface IBreadcrumbItemProps {
    children?: ReactNode;
    isActive?: boolean;
}


export interface IBreadcrumbComposition {
    item: typeof BreadcrumbItem;
}