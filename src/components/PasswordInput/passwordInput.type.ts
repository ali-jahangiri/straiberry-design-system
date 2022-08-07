export interface IPasswordInputProps {
	value?: string;
	placeholder?: string;
	haveError?: boolean;
	handleValidation?: boolean;
	onValidateFail?: () => void;
	onValidateSuccuss?: () => void;
	onChange: (password: string) => void;
}
