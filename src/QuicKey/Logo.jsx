import {
	Easing,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig
} from 'remotion';

const options = {
	extrapolateLeft: "clamp",
	extrapolateRight: "clamp",
	easing: Easing.in(Easing.cubic)
};

export default function Logo()
{
	const { durationInFrames } = useVideoConfig();
	const frame = useCurrentFrame();
	const outroRange = [15, durationInFrames];
	const over = (range) => [frame, outroRange, range, options];

	const opacity = interpolate(...over([1, 0]));
	const blur = interpolate(...over([0, 40]));
	const scale = interpolate(...over([1, 4]));

	return (
		<Img
			src={staticFile("icon-300.png")}
			style={{
				filter: `blur(${blur}px)`,
				transform: `scale(${scale})`,
				opacity,
			}}
		/>
	);
}
