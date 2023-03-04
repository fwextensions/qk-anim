import styled from "styled-components";
import { unit } from "../utils/css";

const WindowContainer = styled.div`
	border: 4px solid var(--win-border-color);
	border-radius: ${unit(4 / 3)};
	background: var(--win-border-color);
	position: relative;
	overflow: hidden;
	box-shadow: 0 ${unit(4 / 3)} ${unit(8 / 3)} rgba(0, 0, 0, 0.5);
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
	margin: ${unit(.25)} 0 0 ${unit(.5)};
`;
const Contents = styled.div`
	background: var(--win-bg-color);
	position: relative;
	flex: 1;
`;

export default function Window({
	children,
	...props })
{
	return (
		<WindowContainer {...props}>
			<TitleBar>
				<TitleBarButtons />
			</TitleBar>
			<Contents>
				{children}
			</Contents>
		</WindowContainer>
	);
}
