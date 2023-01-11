import {
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { tabs } from "./tabs";

const pct = (percentage, variable) => `calc(${percentage} * var(--${variable}))`;

const Window = styled.div`
	width: var(--win-size);
	height: var(--win-size);
	border: 2px solid var(--win-border-color);
	border-radius: 8px;
	background: var(--win-bg-color);
	position: relative;
	overflow: hidden;
	box-shadow: 0 6px 12px var(--shadow,rgba(0, 0, 0, 0.3));
		
	--item-height: calc(2 * var(--unit));
`;
const TitleBar = styled.div`
	width: 100%;
	height: calc(1.5 * var(--unit));
	background: var(--win-border-color);
`;
const Contents = styled.div`
	margin-top: calc(.25 * var(--item-height));
	position: relative;
`;
const Selection = styled.div`
	top: calc(${({ index }) => index} * var(--item-height));
	width: 96%;
	height: var(--item-height);
	margin: 0 2%;
	background: #ebebeb;
	position: absolute;
`;
const TabList = styled.div`
	position: relative;
`;
const TabItem = styled.div`
	width: 100%;
	height: var(--item-height);
	padding: 0 2%;
	flex-direction: row;
	align-items: center;
	gap: calc(.5 * var(--unit));
	display: flex;
`;
const Favicon = styled.div`
	width: calc(.6 * var(--item-height));
	height: calc(.6 * var(--item-height));
	margin: calc(.2 * var(--item-height));
	background: ${({ color }) => color};
`;
const Title = styled.div`
	width: ${({ width }) => width}%;
	height: calc(.3 * var(--item-height));
	background: #aaa;
`;

function Tab({
	tab })
{
	return (
		<TabItem>
			<Favicon color={tab.favicon} />
			<Title width={tab.length} />
		</TabItem>
	);
}

export default function Popup()
{
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const step = Math.floor(durationInFrames / 5);

	return (
		<Window>
			<TitleBar />
			<Contents>
				<Selection index={Math.floor(frame / step)} />
				<TabList>
					{tabs.map((tab, i) => <Tab key={i} tab={tab} />)}
				</TabList>
			</Contents>
		</Window>
	);
}
