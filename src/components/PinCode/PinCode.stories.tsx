import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PinCode from "./PinCode";

export default {
	title: "PinCode",
	component: PinCode,
} as ComponentMeta<typeof PinCode>;

const Story: ComponentStory<typeof PinCode> = (args) => <PinCode {...args} />;

export const Default = Story.bind({});

Default.args = {
	values: ["", "", ""],
};
