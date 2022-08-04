import { ReactNode } from "react";

export type TOptionValue = string | number;

interface ICheckBoxGroupOption {
	label: string;
	value: TOptionValue;
	isDisabled?: boolean;
	desc?: string;
}

export interface ICheckBoxGroupProps {
	isDisabled?: boolean;
	defaultValues?: TOptionValue[];
	children?: ReactNode;
	options?: ICheckBoxGroupOption[];
	onChange?: (checkValues: TOptionValue[]) => void;
}
