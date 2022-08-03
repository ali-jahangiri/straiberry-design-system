import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./TextInput";

export default {
	title: "TextInput",
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Story: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Story.bind({});

Default.args = {
	placeholder: "نام و نام خانوادگی",
};
