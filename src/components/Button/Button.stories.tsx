import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "روی من کلیک کن",
	className: "mycustomClassName",
};

export const Outlined = Template.bind({});
Outlined.args = {
	type: "outlined",
	children: "روی من کلیک کن",
};

export const Text = Template.bind({});
Text.args = {
	type: "text",
	children: "روی من کلیک کن",
};
