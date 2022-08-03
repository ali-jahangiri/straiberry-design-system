import * as React from "react";
import { TComponentRenderEnhancer } from "../types/base.type";

export default function renderEnhancer(Enhancer: TComponentRenderEnhancer) {
	if (typeof Enhancer === "function") return <Enhancer />;
	else return Enhancer;
}
