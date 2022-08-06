import React from "react";
import useClassName from "../../hooks/useClassName";
import { ITableColumn, TSortBaseType } from "./table.type";

interface Props extends Omit<ITableColumn, "key"> {
	sortDataBaseOnHandler: (columnKey: string, index: number, type: TSortBaseType) => void;
	columnKey: string;
	sortOrder: TSortBaseType;
	index: number;
}

const TableColumn: React.FC<Props> = ({ label, columnKey, showSortIcon, sortOrder, index, sortDataBaseOnHandler }) => {
	const className = useClassName("table__column", { withSortIcon: showSortIcon });

	const onSortChangeClickHandler = () => {
		if (showSortIcon) {
			let newSortType: TSortBaseType = "";
			if (!sortOrder) newSortType = "ace";
			else if (sortOrder === "ace") newSortType = "des";
			sortDataBaseOnHandler(columnKey, index, newSortType);
		}
	};

	return (
		<th>
			<div className={className.block} onClick={onSortChangeClickHandler}>
				<span>{label}</span>
				{showSortIcon && (
					<div
						className={`${className.element("sortIcon")} ${
							sortOrder ? `${className.element("sortIcon")}--${sortOrder}Order` : ""
						}`}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 9 5" fill="none">
							<path d="M0.65491 4.4949L4.28887 4.45605L7.56118 4.42106C8.12115 4.41508 8.3939 3.73546 7.99302 3.34305L4.93922 0.353862C4.4499 -0.125101 3.66245 -0.116682 3.18349 0.372633L2.04667 1.53402L0.194294 3.42643C-0.192276 3.82725 0.0949418 4.50089 0.65491 4.4949Z" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 9 5" fill="none">
							<path d="M0.65491 4.4949L4.28887 4.45605L7.56118 4.42106C8.12115 4.41508 8.3939 3.73546 7.99302 3.34305L4.93922 0.353862C4.4499 -0.125101 3.66245 -0.116682 3.18349 0.372633L2.04667 1.53402L0.194294 3.42643C-0.192276 3.82725 0.0949418 4.50089 0.65491 4.4949Z" />
						</svg>
					</div>
				)}
			</div>
		</th>
	);
};

export default TableColumn;
