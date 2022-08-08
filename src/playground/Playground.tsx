import React from "react";
import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";

import { color, ColorProps, layout, LayoutProps } from "styled-system";

interface StyledComponentProps extends ColorProps, LayoutProps {}

const StyledDiv = styled("div", { shouldForwardProp })<StyledComponentProps>`
	${color};
	${layout}
`;

const Playground: React.FC = () => {
	return (
		<div>
			<StyledDiv height={5} bg={"red"}>
				Eius ea necessitatibus nostrum. Qui possimus nobis qui expedita nesciunt. Recusandae accusamus officia rerum.
			</StyledDiv>
		</div>
	);
};

export default Playground;
