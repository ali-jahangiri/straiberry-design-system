import React, { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
	children: ReactNode;
	renderChildren: boolean;
	onMountingChildren?: () => void;
	onUnmountingChildren?: () => void;
	onAfterMount?: (delay: number, cb: () => void) => {};
	mountDelay?: number;
	unmountDelay?: number;
}

const RenderWithDelay = ({
	children,
	unmountDelay,
	mountDelay,
	renderChildren,
	onAfterMount,
	onMountingChildren,
	onUnmountingChildren,
}: Props) => {
	const [haveToRenderChildren, setHaveToRenderChildren] = useState(false);
	const timerIdRef = useRef<Timeout>();

	useEffect(
		function renderOnTimeHandler() {
			if (renderChildren) onMountingChildren?.();
			else onUnmountingChildren?.();

			let timerId = setTimeout(
				() => {
					setHaveToRenderChildren(renderChildren);
					if (renderChildren) {
						onAfterMount();
					}
					clearTimeout(timerId);
				},
				renderChildren ? mountDelay : unmountDelay
			);
			timerIdRef.current = timerId;
		},
		[renderChildren]
	);

	if (haveToRenderChildren) return children;
	else return null;
};

export default RenderWithDelay;
