import { Composition } from "remotion";
import QuicKey from "./QuicKey";
import GlobalStyles, { AnimSize } from "./GlobalStyles";

export default function Root()
{
	return (
		<>
			<GlobalStyles />
			<Composition
				id="QuicKey"
				component={QuicKey}
				durationInFrames={60}
				fps={30}
				width={AnimSize}
				height={AnimSize}
			/>
		</>
	);
};
