import CoreProvider from "../src/providers";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	Story => (
		<div style={{ margin: "3em" }}>
			<CoreProvider>
				<Story />
			</CoreProvider>
		</div>
	),
];
