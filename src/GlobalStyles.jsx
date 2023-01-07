import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	html {
		--anim-size: 240px;
		--unit: calc(var(--anim-size) * 3/4 * 1/20);
		--win-size: calc(var(--unit) * 20);
		--win-border-color: #ccc;
		--win-bg-color: white;
	}
`;
