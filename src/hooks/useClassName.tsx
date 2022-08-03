import { useMemo } from "react";

type TModifierStatus = string | number | boolean | undefined;

interface IClassNameModifier {
	[key: string]: TModifierStatus;
}

interface IModifierPack {
	modifierName: string;
	modifierStatus: TModifierStatus;
}

function checkModifierStatus(modifierStatus: TModifierStatus) {
	if (modifierStatus) return true;
	return false;
}

function createClassNameWithModifierChain(blockName: string, modifiersList: IModifierPack[]) {
	return modifiersList
		.map(modifier => `${blockName}--${modifier.modifierStatus === true ? modifier.modifierName : modifier.modifierStatus}`)
		.join(" ");
}

function combineEntireClassNameSections(blockName: string, modifiersChain: string, additionalInjectedClassName: string | undefined) {
	const haveInjectedClassName = additionalInjectedClassName || "";
	return `${blockName} ${modifiersChain} ${haveInjectedClassName}`.trim();
}

const useClassName = (blockClassName: string, modifiers: IClassNameModifier, additionalInjectableClassName?: string) => {
	const memoizedClassName = useMemo(
		function createClassNameProcessHandler() {
			const activeModifiersList = Object.entries(modifiers)
				.filter(([_, modifierStatus]) => checkModifierStatus(modifierStatus))
				.map(([modifierName, modifierStatus]) => ({ modifierName, modifierStatus }));

			const modifiersChain = createClassNameWithModifierChain(blockClassName, activeModifiersList);
			const className = combineEntireClassNameSections(blockClassName, modifiersChain, additionalInjectableClassName);

			return className;
		},
		[modifiers]
	);

	return {
		block: memoizedClassName,
		element: (...elementIdentifiers: string[]) => {
			return `${blockClassName}__${elementIdentifiers.join("__")}`;
		},
	};
};

export default useClassName;
