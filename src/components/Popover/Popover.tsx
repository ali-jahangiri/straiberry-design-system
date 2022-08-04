import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import selfClearTimeout from "../../utils/selfClearTimeout";

export interface IPopoverProps {
	open?: boolean;
	width?: number;
	placeholder?: React.ReactNode;
	children: React.ReactNode;
	onClose?: () => void;
}

import "./popOver.style.scss";

const Popover: React.FC<IPopoverProps> = ({ open, children, width, placeholder, onClose }) => {
	const [isInUnMounting, setIsInUnMounting] = useState(false);
	const [haveToUnMount, setHaveToUnMount] = useState(!open);
	const popoverRef = useRef<HTMLDivElement>(null);

	const hideAndUnmountDropDown = (isOpen: boolean) => {
		if (!isOpen) {
			setIsInUnMounting(false);
			selfClearTimeout(() => setHaveToUnMount(true), 200);
		} else if (haveToUnMount) {
			setHaveToUnMount(false);
			selfClearTimeout(() => setIsInUnMounting(true), 0);
		}
	};

	// TODO handle too much open/close

	useOutsideClick(
		popoverRef,
		function onOutsideOfPopoverClick() {
			if (open) onClose?.();
		},
		[open]
	);

	useEffect(() => hideAndUnmountDropDown(Boolean(open)), [open]);

	return (
		<div ref={popoverRef} className="popover">
			<div className="popover__placeholder">{placeholder}</div>
			{!haveToUnMount ? (
				<div style={{ width: width }} className={`popover__children ${isInUnMounting ? "popover__children--show" : ""}`}>
					<div className="popover__contentContainer">{children}</div>
				</div>
			) : null}
		</div>
	);
};

export default Popover;
