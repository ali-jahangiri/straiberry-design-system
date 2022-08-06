import React from "react";
import useClassName from "../../hooks/useClassName";
import { ICheckBoxItemProps } from "./checkBoxItem.type";

import "./checkBoxItem.style.scss";

const CheckBoxItem: React.FC<ICheckBoxItemProps> = ({ checked, defaultChecked, desc, isDisabled, label, onChange }) => {
	const isChecked = Boolean(checked || defaultChecked);

	const className = useClassName("checkBoxItem", {
		isDisabled,
		isChecked,
		haveDesc: Boolean(desc),
	});

	const onCheckChangeHandler = (newCheckStatus: boolean) => !isDisabled && onChange?.(newCheckStatus);

	return (
		<div className={className.block}>
			<div className={className.element("input")}>
				<input
					onChange={({ target }) => onCheckChangeHandler(target.checked)}
					disabled={isDisabled}
					checked={isChecked}
					type="checkbox"
				/>
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
					<path d="M12.9201 0.962417C13.0054 0.875375 13.1072 0.806227 13.2196 0.759021C13.3319 0.711815 13.4526 0.6875 13.5745 0.6875C13.6963 0.6875 13.817 0.711815 13.9294 0.759021C14.0417 0.806227 14.1435 0.875375 14.2288 0.962417C14.5863 1.32367 14.5913 1.90742 14.2413 2.27492L6.8501 11.0124C6.76618 11.1046 6.66434 11.1786 6.55082 11.2301C6.43729 11.2815 6.31447 11.3093 6.18985 11.3116C6.06524 11.3139 5.94146 11.2908 5.82609 11.2437C5.71071 11.1965 5.60616 11.1264 5.51885 11.0374L1.02135 6.47992C0.847894 6.30302 0.750732 6.06516 0.750732 5.81742C0.750732 5.56967 0.847894 5.33181 1.02135 5.15492C1.10665 5.06787 1.20847 4.99873 1.32083 4.95152C1.4332 4.90431 1.55385 4.88 1.67572 4.88C1.7976 4.88 1.91825 4.90431 2.03061 4.95152C2.14297 4.99873 2.24479 5.06787 2.3301 5.15492L6.1451 9.02117L12.8951 0.989918C12.9029 0.980257 12.9112 0.971074 12.9201 0.962417Z" />
				</svg>
			</div>
			{label && (
				<div className={className.element("details")}>
					<p onClick={() => onCheckChangeHandler(!isChecked)}>{label}</p>
					{desc && <span>{desc}</span>}
				</div>
			)}
		</div>
	);
};

export default CheckBoxItem;
