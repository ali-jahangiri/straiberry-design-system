export interface ITransitionStageSingleFrameProps {
	children: React.ReactNode;
}

export interface ITransitionStageProps {
	fade?: boolean;
	currentStage: number;
	direction: "vertical" | "horizontal";
	className?: string;
	children: React.ReactNode;
}
