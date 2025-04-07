import { DEVICE_ID, DEVICE_KEY } from "./key.js";
import {
	commands,
	helperFunctions,
	openDialog,
	runFunctionMultipleTimes,
} from "./helper.js";

const baseUrl = "https://api.smartthings.com/v1";

export const SmartThingsServices = {
	/**
	 * Runs the given command on device
	 * @param {string} buttonClassName - Class name of the button to set loading state on
	 * @param {Array<Object>} commands - Array of command objects to be sent to the device
	 */
	api: async (buttonClassName, commands) => {
		console.log("Command function triggered?");
		const url = [baseUrl, "devices", DEVICE_ID, "commands"].join("/");

		// Check if the commands array is valid
		if (!Array.isArray(commands) || commands.length === 0) {
			console.error("Invalid commands array.");
			return;
		}

		try {
			helperFunctions.setLoading(buttonClassName); // Set loading state on button

			const response = await fetch(url, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${DEVICE_KEY}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					commands: [...commands], // Send the commands array
				}),
			});

			// Check if the response is successful
			if (response.ok) {
				console.log("Command executed successfully.");
				openDialog("Command executed successfully.");
			} else {
				const errorData = await response.json();
				console.error("Error occurred:", errorData);
				openDialog(
					`Failed: ${errorData?.message || "Unknown error"}`
				);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			openDialog(`Error: ${error.message}`);
		} finally {
			helperFunctions.finishLoading(buttonClassName); // Finish loading state
		}
	},
	muteAndChangeSourceToTv: async (buttonClassName) => {
		console.log("Command function triggered?");
		const url = [
			"https://api.smartthings.com/v1/scenes/6d0cd906-46bf-4b74-9d15-f6348e8c1c81/execute",
		].join("/");

		try {
			helperFunctions.setLoading(buttonClassName); // Set loading state on button

			const response = await fetch(url, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${DEVICE_KEY}`,
					"Content-Type": "application/json",
				},
			});

			// Check if the response is successful
			if (response.ok) {
				console.log("Command executed successfully.");
				openDialog("Command executed successfully.");
			} else {
				const errorData = await response.json();
				console.error("Error occurred:", errorData);
				openDialog(
					`Failed: ${errorData?.message || "Unknown error"}`
				);
			}
		} catch (error) {
			console.error("An error occurred:", error);
			openDialog(`Error: ${error.message}`);
		} finally {
			helperFunctions.finishLoading(buttonClassName); // Finish loading state
		}
	},
};

document?.getElementById("play-button")?.addEventListener("click", () => {
	SmartThingsServices.api("play-button", [commands.play]);
});
document?.getElementById("pause-button")?.addEventListener("click", () => {
	SmartThingsServices.api("pause-button", [commands.pause]);
});
document?.getElementById("stop-button")?.addEventListener("click", () => {
	SmartThingsServices.api("stop-button", [commands.stop]);
});
document
	?.getElementById("fast-forward-button")
	?.addEventListener("click", () => {
		SmartThingsServices.api("fast-forward-button", [commands.fastForward]);
	});
document?.getElementById("rewind-button")?.addEventListener("click", () => {
	SmartThingsServices.api("rewind-button", [commands.rewind]);
});
document?.getElementById("mute-button")?.addEventListener("click", () => {
	SmartThingsServices.api("mute-button", [commands.mute]);
});
document?.getElementById("unmute-button")?.addEventListener("click", () => {
	SmartThingsServices.api("unmute-button", [commands.unmute]);
});
document?.getElementById("switch-off-button")?.addEventListener("click", () => {
	SmartThingsServices.api("switch-off-button", [commands.switchOff]);
});
document?.getElementById("switch-on-button")?.addEventListener("click", () => {
	SmartThingsServices.api("switch-on-button", [commands.switchOn]);
});
document?.getElementById("pause-mute-button")?.addEventListener("click", () => {
	SmartThingsServices.api("pause-mute-button", [
		commands.pause,
		commands.mute,
	]);
});
document
	?.getElementById("mute-and-tv-button")
	?.addEventListener("click", () => {
		SmartThingsServices.muteAndChangeSourceToTv("mute-and-tv-button");
	});
document
	?.getElementById("turn-off-5-15-button")
	?.addEventListener("click", () => {
		runFunctionMultipleTimes(async() => {
			return await SmartThingsServices.api("turn-off-5-15-button", [
				commands.mute,
				commands.switchOff,
			]);
		});
	});

window.SmartThingsServices = SmartThingsServices;
