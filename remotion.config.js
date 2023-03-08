import { Config } from "remotion";

Config.setPort(3003);
Config.setImageFormat("jpeg");
Config.setShouldOpenBrowser(false);
Config.overrideWebpackConfig((webpack) => ({
	...webpack,
	resolve: {
		...webpack?.resolve,
		alias: {
			...webpack?.resolve?.alias,
			// "remotion-time": "remotion-time"
			"remotion-time": "/src/utils/timeline.js"
		}
	}
}))
