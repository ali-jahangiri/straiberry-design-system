export default function selfClearTimeout(cb: () => void, timeout: number) {
	let timer = setTimeout(() => {
		cb();
		clearTimeout(timer);
	}, timeout);
}
