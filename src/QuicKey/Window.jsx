import styled from "styled-components";
import { unit } from "../utils/css";

export const Window = styled.div`
	width: var(--win-size);
	height: var(--win-size);
	border: 4px solid var(--win-border-color);
	border-radius: ${unit(4 / 3)};
	background: var(--win-border-color);
	position: relative;
	overflow: hidden;
	box-shadow: 0 ${unit(4 / 3)} ${unit(8 / 3)} var(--shadow, rgba(0, 0, 0, 0.3));
	display: flex;
	flex-direction: column;
`;
