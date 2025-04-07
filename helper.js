export const helperFunctions = {
	setLoading: (className) => {
		const btn = document.getElementById(className);
		btn.classList.add("loading");
	},
	finishLoading: (className) => {
		const btn = document.getElementById(className);
		btn.classList.remove("loading");
	},
};

export const commands = {
	switchOff: {
		component: "main",
		capability: "switch",
		command: "off",
		arguments: [],
	},
	switchOn: {
		component: "main",
		capability: "switch",
		command: "on",
		arguments: [],
	},
	mute: {
		component: "main",
		capability: "audioMute",
		command: "mute",
		arguments: [],
	},
	unmute: {
		component: "main",
		capability: "audioMute",
		command: "unmute",
		arguments: [],
	},
	setVolume: (number) => ({
		component: "main",
		capability: "audioVolume",
		command: "setVolume",
		arguments: [number ?? 0],
	}),
	play: {
		component: "main",
		capability: "mediaPlayback",
		command: "play",
		arguments: [],
	},
	pause: {
		component: "main",
		capability: "mediaPlayback",
		command: "pause",
		arguments: [],
	},
	stop: {
		component: "main",
		capability: "mediaPlayback",
		command: "stop",
		arguments: [],
	},
	fastForward: {
		component: "main",
		capability: "mediaPlayback",
		command: "fastForward",
		arguments: [],
	},
	rewind: {
		component: "main",
		capability: "mediaPlayback",
		command: "rewind",
		arguments: [],
	},
};
