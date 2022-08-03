import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PasswordInput from "./PasswordInput";

export default {
	title: "PasswordInput",
	component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Story: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const Default = Story.bind({});

Default.args = {};
