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

function combineEntireClassNameSections(
	blockName: string,
	modifiersChain: string,
	additionalInjectedClassName: string | undefined
) {
	const haveInjectedClassName = additionalInjectedClassName || "";
	return `${blockName} ${modifiersChain} ${haveInjectedClassName}`.trim();
}

function createClassNameProcessHandler(
	baseClassName: string,
	targetModifier?: IClassNameModifier,
	additionalInjectableClassName?: string
) {
	if (targetModifier && Object.keys(targetModifier).length) {
		const activeModifiersList = Object.entries(targetModifier)
			.filter(([_, modifierStatus]) => checkModifierStatus(modifierStatus))
			.map(([modifierName, modifierStatus]) => ({ modifierName, modifierStatus }));

		const modifiersChain = createClassNameWithModifierChain(baseClassName, activeModifiersList);
		const className = combineEntireClassNameSections(baseClassName, modifiersChain, additionalInjectableClassName);

		return className;
	} else return baseClassName;
}

const useClassName = (blockClassName: string, modifiers?: IClassNameModifier, additionalInjectableClassName?: string) => {
	const memoizedClassName = useMemo(
		() => createClassNameProcessHandler(blockClassName, modifiers, additionalInjectableClassName),
		[modifiers]
	);

	return {
		block: memoizedClassName,
		element(...elementIdentifiers: string[]) {
			return `${blockClassName}__${elementIdentifiers.join("__")}`;
		},
		elementWithModifier(elementIdentifier: string[] | string, elementModifier: IClassNameModifier) {
			const detectedCurrentElement = typeof elementIdentifier === "string" ? elementIdentifier : elementIdentifier.join("__");
			const baseClassNameConcatWithElement = `${blockClassName}__${detectedCurrentElement}`;

			return createClassNameProcessHandler(baseClassNameConcatWithElement, elementModifier);
		},
	};
};

export default useClassName;
