import React, { useEffect, useMemo, useRef, useState } from "react";
import selfClearTimeout from "../../utils/selfClearTimeout";

export interface IPasswordInputProps {
	value?: string;
	placeholder?: string;
	haveError?: boolean;
	handleValidation?: boolean;
	onValidateFail?: () => void;
	onValidateSuccuss?: () => void;
	onChange: (password: string) => void;
}

import "./passwordInput.style.scss";

const EN_ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "1234567890";
// const regex = /^(?=.*[A-Z].*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}$/;

function passwordStrengthCheck(password: string) {
	const splittedPasswordString = password.split("");
	let containsLowerCaseChar,
		containsUpperCaseChar,
		containsNumber,
		atLeastEightChar = false;

	splittedPasswordString.find(char => {
		if (EN_ALPHABET.includes(char)) containsLowerCaseChar = true;
		else if (EN_ALPHABET.toUpperCase().includes(char)) containsUpperCaseChar = true;
		else if (NUMBERS.includes(char)) containsNumber = true;
	});

	if (splittedPasswordString.length >= 8) atLeastEightChar = true;

	return {
		containsLowerCaseChar,
		containsUpperCaseChar,
		containsNumber,
		atLeastEightChar,
	};
}

interface IReqRowDataSchema {
	label: string;
	validateKey: "containsLowerCaseChar" | "containsUpperCaseChar" | "containsNumber" | "atLeastEightChar";
}

const REQ_ROW_DATA: IReqRowDataSchema[] = [
	{
		label: "حداقل یک حرف کوچک",
		validateKey: "containsLowerCaseChar",
	},
	{
		label: "حداقل یک حرف بزرگ",
		validateKey: "containsUpperCaseChar",
	},
	{
		label: "حداقل یک عدد",
		validateKey: "containsNumber",
	},
	{
		label: "حداقل 8 حرف باشد",
		validateKey: "atLeastEightChar",
	},
];

const PasswordInput: React.FC<IPasswordInputProps> = ({
	value,
	haveError,
	handleValidation,
	placeholder,
	onValidateFail,
	onValidateSuccuss,
	onChange,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [focusForFirstTime, setFocusForFirstTime] = useState(false);
	const [wasValidPassword, setWasValidPassword] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const focusOnInputHandler = () => {
		selfClearTimeout(function focusOnInputAfterTypeChange() {
			const input = inputRef.current!;
			const endLength = input.value.length;
			input.setSelectionRange(endLength, endLength);
			input.focus();
		}, 50);
	};

	const changeInputTypeHandler = () => {
		setShowPassword(prev => !prev);
		focusOnInputHandler();
	};

	const inputFocusHandler = () => {
		if (!focusForFirstTime) setFocusForFirstTime(true);
	};

	const memoizedStrengthCheckResult = useMemo(() => passwordStrengthCheck(value || ""), [value]);

	useEffect(
		function validatePasswordForSendingIntoHandlers() {
			if (handleValidation && value) {
				const allValueAreTruthy = Object.values(memoizedStrengthCheckResult).every(value => value);
				if (allValueAreTruthy) {
					setWasValidPassword(true);
					onValidateSuccuss?.();
				} else {
					setWasValidPassword(false);
					onValidateFail?.();
				}
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[handleValidation, memoizedStrengthCheckResult, value]
	);

	const haveToShowValidateReqRows = (focusForFirstTime || haveError) && !wasValidPassword;

	return (
		<div className={`passwordInput ${haveError ? "passwordInput--error" : ""}`}>
			<div className="passwordInput__inputContainer">
				<input
					ref={inputRef}
					type={showPassword ? "text" : "password"}
					value={value || ""}
					onFocus={inputFocusHandler}
					placeholder={placeholder}
					onChange={({ target }) => onChange(target.value)}
				/>
				<div
					className={`passwordInput__showPassTrigger ${showPassword ? "passwordInput__showPassTrigger--showPass" : ""}`}
					onClick={changeInputTypeHandler}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10.6667 8C10.6667 9.47276 9.4728 10.6667 8.00004 10.6667C6.52728 10.6667 5.33337 9.47276 5.33337 8C5.33337 6.52724 6.52728 5.33333 8.00004 5.33333C9.4728 5.33333 10.6667 6.52724 10.6667 8ZM9.33337 8C9.33337 8.73638 8.73642 9.33333 8.00004 9.33333C7.26366 9.33333 6.66671 8.73638 6.66671 8C6.66671 7.26362 7.26366 6.66667 8.00004 6.66667C8.73642 6.66667 9.33337 7.26362 9.33337 8Z"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.00004 2C11.7277 2 14.8599 4.54955 15.748 8C14.8599 11.4505 11.7277 14 8.00004 14C4.27236 14 1.14016 11.4505 0.252075 8C1.14016 4.54955 4.27236 2 8.00004 2ZM8.00004 12.6667C5.01633 12.6667 2.48759 10.7054 1.63819 8C2.48759 5.29458 5.01633 3.33333 8.00004 3.33333C10.9837 3.33333 13.5125 5.29458 14.3619 8C13.5125 10.7054 10.9838 12.6667 8.00004 12.6667Z"
						/>
					</svg>
				</div>
			</div>
			{handleValidation && (
				<div
					className={`passwordInput__validateRequiredContainer ${
						haveToShowValidateReqRows ? "passwordInput__validateRequiredContainer--open" : ""
					}`}
				>
					{REQ_ROW_DATA.map((reqItem, i) => (
						<div
							style={{ transitionDelay: `${(i + 1) * 40}ms` }}
							className={`passwordInput__validateReqRow ${
								haveToShowValidateReqRows ? "passwordInput__validateReqRow--show" : ""
							}`}
							key={i}
						>
							{memoizedStrengthCheckResult[reqItem.validateKey] ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
									<path
										d="M7.00004 0.333252C3.32004 0.333252 0.333374 3.31992 0.333374 6.99992C0.333374 10.6799 3.32004 13.6666 7.00004 13.6666C10.68 13.6666 13.6667 10.6799 13.6667 6.99992C13.6667 3.31992 10.68 0.333252 7.00004 0.333252ZM5.19337 9.85992L2.80004 7.46658C2.54004 7.20658 2.54004 6.78658 2.80004 6.52659C3.06004 6.26658 3.48004 6.26658 3.74004 6.52659L5.66671 8.44658L10.2534 3.85992C10.5134 3.59992 10.9334 3.59992 11.1934 3.85992C11.4534 4.11992 11.4534 4.53992 11.1934 4.79992L6.13337 9.85992C5.88004 10.1199 5.45337 10.1199 5.19337 9.85992Z"
										fill="#62B96F"
									/>
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
									<path
										d="M7.00004 0.333252C3.31337 0.333252 0.333374 3.31325 0.333374 6.99992C0.333374 10.6866 3.31337 13.6666 7.00004 13.6666C10.6867 13.6666 13.6667 10.6866 13.6667 6.99992C13.6667 3.31325 10.6867 0.333252 7.00004 0.333252ZM9.86671 9.86658C9.60671 10.1266 9.18671 10.1266 8.92671 9.86658L7.00004 7.93992L5.07337 9.86658C4.81337 10.1266 4.39337 10.1266 4.13337 9.86658C3.87337 9.60658 3.87337 9.18659 4.13337 8.92659L6.06004 6.99992L4.13337 5.07325C3.87337 4.81325 3.87337 4.39325 4.13337 4.13325C4.39337 3.87325 4.81337 3.87325 5.07337 4.13325L7.00004 6.05992L8.92671 4.13325C9.18671 3.87325 9.60671 3.87325 9.86671 4.13325C10.1267 4.39325 10.1267 4.81325 9.86671 5.07325L7.94004 6.99992L9.86671 8.92659C10.12 9.17992 10.12 9.60658 9.86671 9.86658Z"
										fill="#FE6B6B"
									/>
								</svg>
							)}
							<p>{reqItem.label}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PasswordInput;
