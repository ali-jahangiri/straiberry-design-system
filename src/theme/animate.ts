const animate = {
	animateDurationExtraSlow: "500ms",
	animateDurationSlow: "370ms",
	animateDurationNormal: "300ms",
	animateDurationFast: "200ms",
	animateDurationExtraFast: "100ms",
	animateTimingFunction: "cubic-bezier(0.86, 0, 0.07, 1)",
	get animateDefault() {
		return `${this.animateDurationExtraFast} ${this.animateTimingFunction}`;
	},
};

export default animate;
