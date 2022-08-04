import React, { useEffect } from "react";

export function useOutsideClick(ref: React.RefObject<HTMLElement>, cb: () => void, deps?: React.DependencyList | undefined) {
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) cb();
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [ref, cb, deps]);
}
