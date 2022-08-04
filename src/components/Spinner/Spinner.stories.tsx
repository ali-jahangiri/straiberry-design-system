import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";

export default {
	title: "Spinner",
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Story: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Story.bind({});

Default.args = {
	mode: "dark",
};
