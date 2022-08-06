import React, { useEffect, useState } from "react";
import { IColumnSort, ISelectedRecord, ITableProps, TSortBaseType } from "./table.type";

import "./table.style.scss";
import CheckBox from "../CheckBox";
import useClassName from "../../hooks/useClassName";
import TableColumn from "./TableColumn";

const Table: React.FC<ITableProps> = ({
	columns = [],
	data = [],
	selectionEnable,
	headerSticky,
	onSelection,
	onSortBaseChange,
}) => {
	const className = useClassName("table", { isHeaderSticky: headerSticky });
	const [columnSortList, setColumnSortList] = useState<IColumnSort[]>([]);
	const [checkedRecordRow, setCheckedRecordRow] = useState<ISelectedRecord[]>([]);
	const [isAllRecordSelected, setIsAllRecordSelected] = useState(false);

	const onAllRowSelectionHandler = (checked: boolean) => {
		let allRecordRowSelectedList = checked ? data.map((_, index) => ({ check: true, index })) : [];
		onSelection?.(allRecordRowSelectedList);
		setCheckedRecordRow(allRecordRowSelectedList);
	};

	const onRowSelectHandler = (recordRowIndex: number, isChecked: boolean) => {
		const haveCurrentRecordRow = checkedRecordRow.find(record => record.index === recordRowIndex);
		let newCheckedRecordRowList = [];

		if (haveCurrentRecordRow) {
			const recordCurrentlyIsChecked = haveCurrentRecordRow.check;
			if (recordCurrentlyIsChecked)
				newCheckedRecordRowList = checkedRecordRow.filter(record => record.index !== recordRowIndex);
			else {
				newCheckedRecordRowList = checkedRecordRow.map(record =>
					record.index === recordRowIndex ? { ...record, check: isChecked } : record
				);
			}
		} else newCheckedRecordRowList = [...checkedRecordRow, { index: recordRowIndex, check: isChecked }];

		setCheckedRecordRow(newCheckedRecordRowList);
		onSelection?.(newCheckedRecordRowList);
	};

	const sortDataBaseOnHandler = (columnKey: string, index: number, type: TSortBaseType) => {
		const haveCurrentIndexInBaseClone = columnSortList.find(column => column.index === index);

		let newSortColumnList = [];

		if (haveCurrentIndexInBaseClone) {
			newSortColumnList = columnSortList.map(column => (column.index === index ? { ...column, type } : column));
			setColumnSortList(newSortColumnList);
		} else {
			newSortColumnList = [...columnSortList, { index, type, key: columnKey }];
			setColumnSortList(newSortColumnList);
		}

		onSortBaseChange?.(newSortColumnList);
	};

	useEffect(
		function detectEntireRecordRowsSelected() {
			if (checkedRecordRow.length === data.length && checkedRecordRow.every(record => record.check)) {
				setIsAllRecordSelected(true);
			} else setIsAllRecordSelected(false);
		},
		[checkedRecordRow]
	);

	return (
		<div className={className.block}>
			<table>
				<thead>
					<tr>
						{selectionEnable && (
							<th className="table__selectionTrigger">
								<CheckBox.item checked={isAllRecordSelected} onChange={onAllRowSelectionHandler} />
							</th>
						)}
						{columns.map((column, i) => (
							<TableColumn
								index={i}
								sortOrder={columnSortList.find(column => column.index === i)?.type || ""}
								sortDataBaseOnHandler={sortDataBaseOnHandler}
								{...column}
								columnKey={column.key}
								key={i}
							/>
						))}
					</tr>
				</thead>

				<tbody>
					{data.map((rowData, i) => (
						<tr key={i}>
							{selectionEnable && (
								<td className="table__selectionTrigger">
									<CheckBox.item
										onChange={checked => onRowSelectHandler(i, checked)}
										checked={checkedRecordRow.find(record => record.index === i)?.check}
									/>
								</td>
							)}
							{rowData.map((singleDataColumn, index) => (
								<td
									className={`table__singleDataColumn ${
										columnSortList.find(column => column.index === index)?.type
											? "table__singleDataColumn--sortBaseActive"
											: ""
									}`}
									key={index}
								>
									{singleDataColumn}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
