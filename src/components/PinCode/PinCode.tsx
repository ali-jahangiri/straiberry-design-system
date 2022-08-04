import React, { useEffect, useRef } from "react";
import selfClearTimeout from "../../utils/selfClearTimeout";

import "./pinCode.style.scss";

export interface IPinCodeProps {
	values: string[];
	autoFocusWithDelay?: boolean;
	onChange: (values: string[]) => void;
	onFullFill?: () => void;
}

const PinCode: React.FC<IPinCodeProps> = ({ values = [], autoFocusWithDelay, onChange, onFullFill }) => {
	const inputsFieldRefs = useRef<HTMLInputElement[]>([]);

	const blurOnLastFieldComplete = (isTheLastField: boolean) => {
		if (isTheLastField) {
			inputsFieldRefs.current[inputsFieldRefs.current.length - 1].blur();
		}
	};

	const focusOnNextField = (currentIndex: number, currentValue: string) => {
		const nextFieldIndex = currentIndex + 1;
		const isTheLastField = nextFieldIndex === values.length;
		const haveToFocusOnNextFelid = !isTheLastField && currentValue;
		if (haveToFocusOnNextFelid) {
			inputsFieldRefs.current[nextFieldIndex].focus();
		} else blurOnLastFieldComplete(isTheLastField);
	};

	const inputFieldBoxValueChange = (index: number, newValue: string) => {
		const newDiffValue = newValue.replace(values[index], "");
		if (!Number.isNaN(Number(newDiffValue))) {
			const newValuesList = values.map((value, i) => (i === index ? newDiffValue : value));
			onChange(newValuesList);
			checkAndApplyFullFill(newValuesList);
			focusOnNextField(index, newDiffValue);
		}
	};

	const checkAndApplyFullFill = (valuesList: (string | number)[]) => {
		const isEveryValueIsTruthy = valuesList.every(value => value);
		if (isEveryValueIsTruthy && onFullFill) onFullFill();
	};

	useEffect(
		function autoFocusOnFirstInputWithDelay() {
			if (autoFocusWithDelay) {
				selfClearTimeout(() => {
					inputsFieldRefs.current[0]?.focus();
				}, 100);
			}
		},
		[autoFocusWithDelay]
	);

	return (
		<div className="pinCode">
			<div className="pinCode__fieldsContainer">
				<form action="">
					{values.map((value, i) => (
						<input
							inputMode="numeric"
							ref={ref => (inputsFieldRefs.current[i] = ref as HTMLInputElement)}
							className="pinCode__fieldBox"
							type="text"
							key={i}
							value={value}
							placeholder="○"
							onChange={({ target }) => inputFieldBoxValueChange(i, target.value)}
						/>
					))}
				</form>
			</div>
		</div>
	);
};

export default PinCode;
