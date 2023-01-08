import { Composition } from "remotion";
import QuicKey from "./QuicKey";
import GlobalStyles from "./GlobalStyles";

export const RemotionRoot = () => {
	return (
		<>
			<GlobalStyles />
			<Composition
				id="QuicKey"
				component={QuicKey}
				durationInFrames={150}
				fps={30}
				width={640}
				height={480}
			/>
		</>
	);
};
