import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

export default {
	title: "Breadcrumb",
	component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Story: ComponentStory<typeof Breadcrumb> = args => (
	<Breadcrumb {...args}>
		<Breadcrumb.item>لیست بیماران</Breadcrumb.item>
		<Breadcrumb.item>ثبت نام بیماران</Breadcrumb.item>
		<Breadcrumb.item>ارائه مدارک</Breadcrumb.item>
	</Breadcrumb>
);

export const Default = Story.bind({});

Default.args = {};
