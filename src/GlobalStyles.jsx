import { createGlobalStyle } from "styled-components";

export const AnimSize = 240;

export default createGlobalStyle`
	html {
		--anim-size: ${AnimSize}px;
		--unit: calc(var(--anim-size) * 3/4 * 1/20);
		--win-border-color: #ccc;
		--win-bg-color: white;
	}

	[data-theme="dark"] {
		--win-border-color: #424242;
		--win-bg-color: rgb(50, 50, 50);
	}
`;
