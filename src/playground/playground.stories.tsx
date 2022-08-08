import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Playground from "./Playground";

export default {
	title: "PLayground",
	component: Playground,
} as ComponentMeta<typeof Playground>;

const Story: ComponentStory<typeof Playground> = args => <Playground {...args} />;

export const Default = Story.bind({});

Default.args = {};
