import {
	Easing,
	Img,
	staticFile,
	useVideoConfig
} from "remotion";
import { useInterpolate } from "../useInterpolate";

const options = {
	extrapolateLeft: "clamp",
	extrapolateRight: "clamp",
	easing: Easing.in(Easing.cubic)
};

export default function Logo()
{
	const { durationInFrames } = useVideoConfig();
	const outroRange = [durationInFrames - 15, durationInFrames];
	const interpolate = useInterpolate(outroRange, options);

	const { opacity, blur, scale } = interpolate({
		opacity: [1, 0],
		blur: [0, 40],
		scale: [1, 4],
	});

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
