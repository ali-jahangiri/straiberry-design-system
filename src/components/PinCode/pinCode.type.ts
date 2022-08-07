export interface IPinCodeProps {
	values: string[];
	autoFocusWithDelay?: boolean;
	onChange: (values: string[]) => void;
	onFullFill?: () => void;
}
