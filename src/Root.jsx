import { Composition } from "remotion";
import { HelloWorld } from "./HelloWorld";
import { Logo } from "./HelloWorld/Logo";
import GlobalStyles from "./GlobalStyles";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
	return (
		<>
			<GlobalStyles />
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={640}
				height={480}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: "Derp",
					titleColor: "black",
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
{/*
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
*/}
		</>
	);
};
