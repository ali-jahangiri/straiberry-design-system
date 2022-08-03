import React from "react";
import useClassName from "../../hooks/useClassName";
import { IAvatarProps } from "./avatar.type";

import "./avatar.style.scss";

const Avatar: React.FC<IAvatarProps> = ({ name, color, size = "medium", src }) => {
	const modifiersList = { size };
	const className = useClassName("avatar", modifiersList);

	return (
		<div style={color ? { backgroundColor: color } : undefined} className={className.block}>
			{src ? <img src={src} alt="user" /> : name && <p>{name.slice(0, 2).toUpperCase()}</p>}
		</div>
	);
};

export default Avatar;
