import { ReactNode } from "react";

export interface ICoreProvider {
	theme?: any; // !NOTE create theme schema
	children?: ReactNode;
}
