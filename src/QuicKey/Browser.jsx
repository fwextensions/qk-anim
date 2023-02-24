import styled from "styled-components";
import { unit } from "../utils/css";
import Window from "./Window";

const BrowserWindow = styled(Window)`
	--win-toolbar-color: #424242;
	--win-border-color: var(--win-bg-color);
`;
const LocationBar = styled.div`
	width: 100%;
	height: ${unit(2)};
	border: 1px solid var(--win-toolbar-color);
	border-width: ${unit(.5)} ${unit(4)} ${unit(.5)} ${unit(1.5)};
	background: var(--win-bg-color);
`;

export default function Browser()
{
	return (
		<BrowserWindow>
			<LocationBar />
		</BrowserWindow>
	);
}
