import React from "react";
import CheckBoxGroup from "./CheckBoxGroup";
import CheckBoxItem from "./CheckBoxItem";

export interface ICheckBoxComposition {
	item: typeof CheckBoxItem;
	group: typeof CheckBoxGroup;
}

const CheckBox: React.FC & ICheckBoxComposition = ({}) => {
	return <div></div>;
};

CheckBox.item = CheckBoxItem;
CheckBox.group = CheckBoxGroup;

export default CheckBox;
