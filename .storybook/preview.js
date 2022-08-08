import ThemeProvider from "../src/provider/ThemProvider";

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
			<ThemeProvider>{<Story />}</ThemeProvider>
		</div>
	),
];
