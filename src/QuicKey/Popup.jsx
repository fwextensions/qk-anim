import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components";
import { mult, unit } from "../utils/css";
import Window from "./Window";

const SpringConfig = {
	stiffness: 150
};

const PopupWindow = styled(Window)`
	width: ${unit(20)};
	margin-top: ${unit(3)};
	--item-height: ${unit(3)};
`;
const Selection = styled.div`
	top: ${({ index }) => mult(index, "item-height")};
	width: 100%;
	height: var(--item-height);
	background: hsl(240, 90%, 93%);
	position: absolute;
		
	[data-theme="dark"] & {
		background: hsl(240, 40%, 55%);
	}
`;
const TabList = styled.div`
	height: ${mult(4, "item-height")};
	overflow: hidden;
	position: relative;
`;
const TabItem = styled.div`
	width: 100%;
	height: var(--item-height);
	padding: 0 2%;
	flex-direction: row;
	align-items: center;
	gap: ${unit(.5)};
	display: flex;
	position: relative;
`;
const Favicon = styled.div`
	width: ${mult(.6, "item-height")};
	height: ${mult(.6, "item-height")};
	margin: ${mult(.2, "item-height")};
	background: ${({ color }) => color};
`;
const Title = styled.div`
	width: ${({ width }) => width}%;
	height: ${mult(.3, "item-height")};
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
	recents,
	maxIndex,
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
		// the first recent is the active tab, which we don't show in the results list
	const resultsList = recents.slice(1);

	return (
		<PopupWindow>
			<TabList>
				<Selection index={selectedItem + selectionJitter} />
				{resultsList.map((tab, i) => <Tab key={i} tab={tab} />)}
			</TabList>
		</PopupWindow>
	);
}
