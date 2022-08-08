import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckBox from "./CheckBox";
import LibraryCheckBoxItem from "./CheckBoxItem";
import LibraryCheckBoxGroup from "./CheckBoxGroup";

export default {
	title: "CheckBox",
	component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const CheckBoxItemStory: ComponentStory<typeof LibraryCheckBoxItem> = args => <LibraryCheckBoxItem {...args} />;
const CheckBoxGroupStory: ComponentStory<typeof LibraryCheckBoxGroup> = args => <LibraryCheckBoxGroup {...args} />;

export const CheckBoxItem = CheckBoxItemStory.bind({});
export const CheckBoxGroup = CheckBoxGroupStory.bind({});

const STATIC_OPTION = [
	{
		label: "ورزشی",
		value: "sport",
	},
	{
		label: "اخبار",
		value: "news",
		desc: "با انتخاب این گزینه میتوانید اخبار جهان را دنبال کنید.",
	},
	{
		label: "درسی",
		value: "educations",
	},
	{
		label: "تکنولوژی",
		value: "tech",
		isDisabled: true,
	},
	{
		label: "سبک زندگی",
		value: 100,
	},
];

CheckBoxGroup.args = {
	options: STATIC_OPTION,
	isDisabled: false,
	defaultValues: ["educations"],
	onChange: checkValues => {},
};

CheckBoxItem.args = {
	checked: true,
	label: "قوانین را میپذیرم",
	desc: "با پذیرش فعال سازی تمامی قوانین را میپذرید!",
	isDisabled: false,
};
