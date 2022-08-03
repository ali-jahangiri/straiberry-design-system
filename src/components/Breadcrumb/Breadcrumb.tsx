import React from "react";

import { IBreadcrumbComposition, IBreadcrumbGroupProps } from "./breadcrumb.type";
import BreadcrumbItem from "./BreadcrumbItem";

import "./breadcrumb.style.scss";

const Breadcrumb: React.FC<IBreadcrumbGroupProps> & IBreadcrumbComposition = ({ children, separator = ">" }) => {
	return (
		<div className="breadcrumb">
			{React.Children.map(children, (child, i) => {
				const isLastItem = i === React.Children.count(children) - 1;
				return (
					<React.Fragment key={i}>
						{React.cloneElement(child, { isActive: isLastItem })}
						{!isLastItem && <div className="breadcrumb__separator">{separator}</div>}
					</React.Fragment>
				);
			})}
		</div>
	);
};

Breadcrumb.item = BreadcrumbItem;

export default Breadcrumb;
