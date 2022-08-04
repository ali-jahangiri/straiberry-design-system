import React, { useState } from "react";
import { ICheckBoxGroupProps, TOptionValue } from "./checkBoxGroup.type";
import CheckBoxItem from "./CheckBoxItem";

import "./checkBoxGroup.style.scss";

const CheckBoxGroup: React.FC<ICheckBoxGroupProps> = ({
	isDisabled: groupDisabled,
	options = [],
	defaultValues = [],
	onChange,
}) => {
	const [checkValues, setCheckValues] = useState<TOptionValue[]>(defaultValues);

	const addToCheckedValuesList = (optionValue: TOptionValue) => {
		const newCheckedValuesList = [...checkValues, optionValue];
		setCheckValues(newCheckedValuesList);
		onChange?.(newCheckedValuesList);
	};

	const removeFromCheckedValuesList = (optionValue: TOptionValue) => {
		const newCheckedValuesList = checkValues.filter(check => check !== optionValue);
		setCheckValues(newCheckedValuesList);
		onChange?.(newCheckedValuesList);
	};

	const checkBoxItemValueChange = (optionValue: TOptionValue, isCheck: boolean) => {
		if (isCheck) addToCheckedValuesList(optionValue);
		else if (checkValues.includes(optionValue)) removeFromCheckedValuesList(optionValue);
	};

	return (
		<div className="checkBoxGroup">
			{options.length
				? options.map((option, i) => (
						<CheckBoxItem
							isDisabled={groupDisabled || option.isDisabled}
							checked={checkValues.includes(option.value)}
							label={option.label}
							desc={option.desc}
							defaultChecked={checkValues?.includes(option.value)}
							onChange={isChecked => checkBoxItemValueChange(option.value, isChecked)}
							key={i}
						/>
				  ))
				: null}
		</div>
	);
};

export default CheckBoxGroup;
