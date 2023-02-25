import { Img, staticFile } from "remotion";

export default function LogoImage({
	style })
{
	return (
		<Img
			src={staticFile("icon-300.png")}
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				...style
			}}
		/>
	);
}
