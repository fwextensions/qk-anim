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
	border-width: ${unit(.5)} ${unit(6)} ${unit(.5)} ${unit(2.5)};
	background: var(--win-bg-color);
`;
const TabBar = styled.div`
	width: 100%;
	height: ${unit(2)};
	margin-top: ${unit(-2)};
	padding: ${unit(.25)} ${unit(.25)} 0 ${unit(6)};
	display: flex;
`;
const TabButton = styled.div`
	width: 100%;
	height: 100%;
	border-right: 3px solid var(--win-toolbar-color);
	display: flex;
	align-items: center;
	justify-content: center;
		
	&:last-child {
		border-right-width: 0;
	}
`;
const Favicon = styled.div`
	width: ${unit(.75)};
	height: ${unit(.75)};
	
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
	const tabs = [...recents].sort((a, b) => a.id - b.id);
	const tabButtons = tabs.map(({ id, favicon }, i) => {
		const isActive = id === activeTab;

		return (
			<TabButton key={i} style={{ background: isActive ? "var(--win-toolbar-color)" : "none" }}>
				<Favicon style={{ background: favicon, opacity: isActive ? 1 : .5 }} />
			</TabButton>
		);
	});

	return (
		<BrowserWindow>
			<TabBar>
				{tabButtons}
			</TabBar>
			<LocationBar />
			<TabContent bg={tabs[activeTab].content} />
		</BrowserWindow>
	);
}
