import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popover from "./Popover";

export default {
	title: "Popover",
	component: Popover,
} as ComponentMeta<typeof Popover>;

const Story: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Default = Story.bind({});

Default.args = {
	placeholder: "معنای زندگی",
};
