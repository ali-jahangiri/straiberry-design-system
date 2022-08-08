import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import selfClearTimeout from "../../utils/selfClearTimeout";
import { IPopoverProps } from "./popOver.type";

import "./popOver.style.scss";
import useClassName from "../../hooks/useClassName";
import useCrossoverViewportDetection from "../../hooks/useCrossoverViewportDetection";

const Popover: React.FC<IPopoverProps> = ({ visible, content, width, placeholder, onClose }) => {
	const [renderContent, setRenderContent] = useState(false);
	const [fadeShowingContent, setFadeShowingContent] = useState(false);
	const className = useClassName("popover");

	const popoverRef = useRef<HTMLDivElement>(null);
	const popoverContentRef = useRef<HTMLDivElement>(null);

	const showContentHandler = () => {
		setRenderContent(true);

		selfClearTimeout(() => {
			setFadeShowingContent(true);
		}, 50);
	};

	const hideContentHandler = () => {
		setFadeShowingContent(false);
		selfClearTimeout(() => {
			setRenderContent(false);
		}, 200);
	};

	const clickOnPlaceholderContainerHandler = () => {
		if (renderContent) hideContentHandler();
		else showContentHandler();
	};

	useOutsideClick(popoverRef, hideContentHandler);

	const acrossXUnit = useCrossoverViewportDetection(popoverContentRef);

	useEffect(
		function changePopoverStatus() {
			if (visible) showContentHandler();
			else hideContentHandler();
		},
		[visible]
	);

	return (
		<div ref={popoverRef} className={className.block}>
			<div onClick={clickOnPlaceholderContainerHandler} className={className.element("placeholder")}>
				{placeholder}
			</div>
			{renderContent ? (
				<div
					ref={popoverContentRef}
					style={{ width, left: `calc(50% + ${acrossXUnit}px)` }}
					className={className.elementWithModifier("content", { show: fadeShowingContent })}
				>
					<span className={className.element("content", "arrow")} style={{ left: `calc(50% + ${acrossXUnit * -1}px)` }} />
					<div className={className.element("contentContainer")}>{content}</div>
				</div>
			) : null}
		</div>
	);
};

export default Popover;
