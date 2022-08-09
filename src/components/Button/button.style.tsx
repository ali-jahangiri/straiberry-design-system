import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";

import { IButtonProps } from "./button.type";
import { space } from "styled-system";

const StyledButton = styled("button", { shouldForwardProp })<IButtonProps>`
	${space};
`;
export default StyledButton;
