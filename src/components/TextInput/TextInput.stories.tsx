import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "./TextInput";

export default {
	title: "TextInput",
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Story: ComponentStory<typeof TextInput> = args => {
	const [value, setValue] = useState("");

	return (
		<div style={{ marginTop: "10rem", width: "60%" }}>
			<TextInput {...args} value={value} onChange={setValue} />
		</div>
	);
};

export const Default = Story.bind({});

Default.args = {
	placeholder: "نام و نام خانوادگی را وارد نماید.",
	label: "نام و نام خانوادگی",
};
