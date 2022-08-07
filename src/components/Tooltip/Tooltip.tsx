import React, { useRef, useState } from "react";
import { ITooltipProps } from "./tooltip.type";

import "./tooltip.style.scss";
import useClassName from "../../hooks/useClassName";
import selfClearTimeout from "../../utils/selfClearTimeout";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Tooltip: React.FC<ITooltipProps> = ({ title, align = "button", delay = 100, triggerWidth = "hover", children }) => {
	const [renderTitle, setRenderTitle] = useState(false);
	const [fadeShowingTitle, setFadeShowingTitle] = useState(false);
	const childrenContainerRef = useRef<HTMLDivElement>(null);

	const className = useClassName("tooltip");

	const showTittleHandler = () => {
		setRenderTitle(true);
		selfClearTimeout(() => {
			setFadeShowingTitle(true);
		}, delay);
	};

	const hideTitleHandler = () => {
		setFadeShowingTitle(false);
		selfClearTimeout(() => {
			setRenderTitle(false);
		}, delay);
	};

	const clickOnChildrenContainerHandler = () => {
		if (triggerWidth === "click") {
			if (!renderTitle) showTittleHandler();
			else hideTitleHandler();
		}
	};

	const onHoverInChildrenContainer = () => triggerWidth === "hover" && showTittleHandler();

	const onLeaveChildrenContainer = () => triggerWidth === "hover" && hideTitleHandler();

	useOutsideClick(childrenContainerRef, hideTitleHandler);

	return (
		<div onMouseEnter={onHoverInChildrenContainer} onMouseLeave={onLeaveChildrenContainer} className={className.block}>
			<div ref={childrenContainerRef} onClick={clickOnChildrenContainerHandler} className={className.element("children")}>
				{children}
			</div>
			{renderTitle && (
				<div className={className.elementWithModifier("title", { align, show: fadeShowingTitle })}>
					<span className={className.element("title", "arrow")}></span>
					<span>{title}</span>
				</div>
			)}
		</div>
	);
};

export default Tooltip;
