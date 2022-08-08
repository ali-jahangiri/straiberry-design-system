export interface IPopoverProps {
	visible?: boolean;
	width?: number;
	placeholder?: React.ReactNode;
	content?: React.ReactNode;
	onClose?: () => void;
}
