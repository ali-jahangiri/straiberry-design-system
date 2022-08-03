import React from "react";
import useClassName from "../../hooks/useClassName";
import { IBreadcrumbItemProps } from "./breadcrumb.type";

import "./breadcrumbItem.style.scss";

const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = ({ children, isActive }) => {
	const className = useClassName("breadcrumbItem", { isActive });

	return <div className={className.block}>{children}</div>;
};

export default BreadcrumbItem;
