import { ReactNode } from "react";

type TTableDataRecord = (string | number | ReactNode | undefined)[];

export interface ITableColumn {
	label: ReactNode;
	key: string;
	showSortIcon?: boolean;
}

export type TSortBaseType = "ace" | "des" | "";

export interface IColumnSort {
	index: number;
	type: TSortBaseType;
	key: string;
}

export interface ISelectedRecord {
	index: number;
	check: boolean;
}

export interface ITableProps {
	columns?: ITableColumn[];
	selectionEnable?: boolean;
	data?: TTableDataRecord[];
	headerSticky?: boolean;
	onSelection?: (selectedRecordRows: ISelectedRecord[]) => void;
	onSortBaseChange?: (sortList: IColumnSort[]) => void;
}
