import * as React from "react";
import { useEffect, useRef } from "react";
import SlickSlider from "react-slick";
import { ITransitionStageProps, ITransitionStageSingleFrameProps } from "./transition.type";

const TransitionStage = (props: ITransitionStageProps) => {
	const { children, currentStage, className } = props;

	const sliderRef = useRef<SlickSlider>(null);

	const sliderConfig = {
		arrows: false,
		dots: false,
		fade: false,
		infinite: false,
		verticalSwiping: false,
		swipeToSlide: false,
		swipe: false,
		draggable: false,
		speed: 270,
		slidesToShow: 1,
		// vertical: true,
		easing: "fade-our",
		className: "",
	};

	useEffect(
		function slideToCurrentStage() {
			if (currentStage !== 0) sliderRef.current?.slickGoTo(currentStage);
		},
		[currentStage]
	);

	return (
		<div className={`transitionStage ${className || ""}`}>
			<SlickSlider ref={sliderRef} {...sliderConfig} lazyLoad="ondemand">
				{children}
			</SlickSlider>
		</div>
	);
};

TransitionStage.Stage = function (props: ITransitionStageSingleFrameProps) {
	const { children } = props;
	return <div className="transitionStage__stageFrame">{children}</div>;
};

export default TransitionStage;
