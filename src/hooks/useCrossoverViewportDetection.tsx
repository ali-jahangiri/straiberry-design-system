import React, { useLayoutEffect, useState } from "react";

const STATIC_GAP_BETWEEN_WINDOW_EDGE = 20;

function useCrossoverViewportDetection(targetElementRef: React.RefObject<HTMLElement>): number {
	const [leftPosition, setLeftPosition] = useState(0);

	useLayoutEffect(
		function detectCardCrossoverViewPortHandler() {
			if (targetElementRef.current) {
				const elementRects = targetElementRef.current.getClientRects()[0];
				const viewportWidth = window.innerWidth;

				const elementSpaceInXAxis = elementRects.x + elementRects.width;
				const haveCrossOverViewport = elementRects.x < 0 || elementSpaceInXAxis > viewportWidth;

				if (haveCrossOverViewport) {
					const negativeCrossoverSize = (() => {
						if (elementRects.x < 0) return elementRects.x * -1 + STATIC_GAP_BETWEEN_WINDOW_EDGE;
						else return window.innerWidth - elementSpaceInXAxis - STATIC_GAP_BETWEEN_WINDOW_EDGE;
					})();
					setLeftPosition(negativeCrossoverSize);
				}
			}
		},
		[targetElementRef.current]
	);

	return leftPosition;
}

export default useCrossoverViewportDetection;
