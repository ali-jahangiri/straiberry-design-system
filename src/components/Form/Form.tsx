import React from "react";
import { IFormProps } from "./form.type";

const Form: React.FC<IFormProps> = ({ children, onSubmit, ...restElementProperty }) => {
	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<form {...restElementProperty} onSubmit={onSubmitHandler}>
			{children}
		</form>
	);
};

export default Form;
