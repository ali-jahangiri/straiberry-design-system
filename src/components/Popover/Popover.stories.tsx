import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popover from "./Popover";
import Button from "../Button";

export default {
	title: "Popover",
	component: Popover,
} as ComponentMeta<typeof Popover>;

const Story: ComponentStory<typeof Popover> = args => (
	<div style={{ display: "flex", justifyContent: "flex-end" }}>
		<Popover {...args} placeholder={<Button>lorem iii</Button>} />
	</div>
);

export const Default = Story.bind({});

Default.args = {
	content: (
		<div style={{ backgroundColor: "" }}>
			Sequi minima et aut. Molestiae in totam eveniet vero enim repellendus sed voluptatem. Autem deleniti aut amet nostrum
			omnis doloribus aut. Et quo neque rem deserunt mollitia doloribus enim similique ut. Esse magni expedita sed amet est.
			Sed inventore libero quia cum. Rerum dolorem rerum. Perspiciatis quod quia tenetur. Et et nulla debitis assumenda ut
			dicta modi odio. Nulla iusto sint. Aut voluptates et vel minus impedit.
		</div>
	),
	width: 500,
};
