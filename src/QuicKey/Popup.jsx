import {
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { tabs } from "./tabs";

const unit = (value = 1) => `calc(${value} * var(--unit))`;
const mul = (value, variable) => `calc(${value} * var(--${variable}))`;

const Window = styled.div`
	--item-height: calc(3 * var(--unit));
		
	width: var(--win-size);
	height: var(--win-size);
	border: 4px solid var(--win-border-color);
	border-radius: ${unit(4/3)};
	background: var(--win-bg-color);
	position: relative;
	overflow: hidden;
	box-shadow: 0 6px 12px var(--shadow, rgba(0, 0, 0, 0.3));
	display: flex;
	flex-direction: column;
	gap: var(--unit);
`;
const TitleBar = styled.div`
	width: 100%;
	height: ${unit(2)};
	background: var(--win-border-color);
`;
const TitleBarButtons = styled.div`
	width: ${unit(4.5)};
	border-top: var(--unit) dotted #444;
	margin: calc(0.25 * var(--unit)) 0 0 calc(0.25 * var(--unit));
`;
const Contents = styled.div`
	height: ${mul(5, "item-height")};
	position: relative;
	overflow: hidden;
`;
const Selection = styled.div`
	top: calc(${({ index }) => index} * var(--item-height));
	width: 94%;
	height: var(--item-height);
	margin: 0 3%;
	background: hsl(240, 90%, 93%);
	position: absolute;
		
	[data-theme="dark"] & {
		background: hsl(240, 40%, 55%);
	}
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
			
	[data-theme="dark"] & {
			background: #bbb;
  }
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
			<TitleBar>
				<TitleBarButtons />
			</TitleBar>
			<Contents>
				<Selection index={Math.floor(frame / step)} />
				<TabList>
					{tabs.map((tab, i) => <Tab key={i} tab={tab} />)}
				</TabList>
			</Contents>
		</Window>
	);
}
