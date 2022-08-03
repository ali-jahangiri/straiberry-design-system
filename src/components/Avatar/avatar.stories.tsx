import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "./Avatar";

export default {
	title: "Avatar",
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Story: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Default = Story.bind({});

Default.args = {
	src: "https://s3-alpha-sig.figma.com/img/8e6c/e044/a32cb5b611eaf4d4b6d1d04c3d94aa11?Expires=1660521600&Signature=ItOh-EAvxWNTe9Li09CbiWySmkoWMru~-6ryl0HYs07OVYFNuiKET~c9XRuUqTO3M5RSrh~Q3pG9gbDVjYqmnYSGsCVd~OygvCwZEXOIneuiPWkfYX~~COUToPT4FieYXxZX4uMsehlxRCryaVcj5ztZjj3rebazEUPNcZweT-I0FbKo9EiiSCWf1e4TJeECSvjK352Cl4lqrLprBtaHo0CJ4g0aiYIjRif6D1ui2QjaDM1kfEwToGaDD-5HFdZEiz2Nz1DIKNDzlrrM9NTLOgg9e2XEIt8r65~NIprGE2ixaV3xW9S5-hTF1MQjKjNwFeJUe6SwFBlasgUw0wJ9LQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
};
