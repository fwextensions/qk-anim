import { useInterpolate, useTime } from "../utils/timeline";

export default function Fade({
	range = [0, 1],
	from = 0,
	duration,
	options,
	style,
	children,
	...props })
{
	const t = useTime();
	const frameFrom = t(from);
	const opacity = useInterpolate([frameFrom, frameFrom + t(duration)], range, options);

	return (
		<div
			style={{ ...style, opacity }}
			{...props}
		>
			{children}
		</div>
	);
}
