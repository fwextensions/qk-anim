import styled from "styled-components";
import { unit } from "../utils/css";
import Window from "./Window";

const BrowserWindow = styled(Window)`
	--win-toolbar-color: #424242;
	--win-border-color: var(--win-bg-color);
	width: ${unit(24)};
	height: ${unit(24)};
`;
const LocationBar = styled.div`
	width: 100%;
	height: ${unit(2)};
	border: 1px solid var(--win-toolbar-color);
	border-width: ${unit(.5)} ${unit(4)} ${unit(.5)} ${unit(1.5)};
	background: var(--win-bg-color);
`;
const TabContent = styled.div`
	height: 100%;
	${({ bg }) => bg};
	opacity: .75;
`;

export default function Browser({
	recents,
	activeTab })
{
	return (
		<BrowserWindow>
			<LocationBar />
			<TabContent bg={recents[activeTab].content} />
		</BrowserWindow>
	);
}
