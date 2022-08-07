import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";
import Button from "../Button";

export default {
	title: "Tooltip",
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Story: ComponentStory<typeof Tooltip> = args => (
	<div style={{ margin: "5rem 16rem" }}>
		<Tooltip {...args} />
	</div>
);

export const Default = Story.bind({});

Default.args = {
	children: <Button>روی من هاورهاورهاورهاورهاورهاورهاورهاورهاورهاور کن</Button>,
	title: "فعال سازی پیامک",
	triggerWidth: "click",
	align: "top",
};
