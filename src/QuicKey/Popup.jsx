import {
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import styled from "styled-components";
import { tabs } from "./tabs";

const SpringConfig = {
	stiffness: 150
};

const mult = (value, variable) => `calc(${value} * var(--${variable}))`;
const unit = (value = 1) => mult(value, "unit");

const Window = styled.div`
	--item-height: calc(3 * var(--unit));
		
	width: var(--win-size);
	height: var(--win-size);
	border: 4px solid var(--win-border-color);
	border-radius: ${unit(4/3)};
	background: var(--win-border-color);
	position: relative;
	overflow: hidden;
	box-shadow: 0 ${unit(4/3)} ${unit(8/3)} var(--shadow, rgba(0, 0, 0, 0.3));
	display: flex;
	flex-direction: column;
`;
const TitleBar = styled.div`
	width: 100%;
	height: ${unit(2)};
	background: var(--win-border-color);
`;
const TitleBarButtons = styled.div`
	width: ${unit(4.5)};
	border-top: var(--unit) dotted #666;
	margin: calc(0.25 * var(--unit)) 0 0 calc(0.5 * var(--unit));
`;
const Contents = styled.div`
	background: var(--win-bg-color);
	padding-top: var(--unit);
	position: relative;
	flex: 1;
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
	height: ${mult(5, "item-height")};
	overflow: hidden;
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
	position: relative;
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

export default function Popup({
	maxIndex = 3,
	stepFrameCount = 15 })
{
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const maxFrame = (maxIndex + 1) * stepFrameCount;
	const selectedItem = Math.min(Math.floor(frame / stepFrameCount), maxIndex);
		// each time the selection changes, the spring should loop 0..stepFrameCount
	const selectionFrame = frame % stepFrameCount;
		// give a little bounce to the selection movement, but stop after we've hit
		// the last frame where the selection changes
	const selectionJitter = frame >= maxFrame ? 0 : spring({
		from: -.5,
		to: 0,
		frame: selectionFrame,
		fps,
		durationInFrames: stepFrameCount,
		config: SpringConfig
	});

	return (
		<Window>
			<TitleBar>
				<TitleBarButtons />
			</TitleBar>
			<Contents>
				<TabList>
					<Selection index={selectedItem + selectionJitter} />
					{tabs.map((tab, i) => <Tab key={i} tab={tab} />)}
				</TabList>
			</Contents>
		</Window>
	);
}
