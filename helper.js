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


export async function runFunctionMultipleTimes(asyncFunc, interval = 15000, times = 5) {
    let count = 0;
    const intervalId = setInterval(async () => {
        if (count < times) {
            await asyncFunc(); // Wait for the async function to complete
            count++;
        } else {
            clearInterval(intervalId); // Stop the interval after the specified number of executions
        }
    }, interval);
}


// Function to open the dialog with a custom message
export function openDialog(message) {
    const dialog = document.getElementById('customDialog');
    const dialogMessage = document.getElementById('dialogMessage');
    dialogMessage.textContent = message;
    dialog.showModal(); // Display the dialog

    // Set a timeout to close the dialog after 2 seconds
    const timeoutId = setTimeout(() => {
        dialog.close(); // Close the dialog
        console.log('Dialog closed automatically after 2 seconds.');
    }, 2000);

    // Clear the timeout if the dialog is closed manually
    dialog.addEventListener('close', () => {
        clearTimeout(timeoutId);
        console.log('Dialog closed manually.');
    });
}

// Close the dialog when the close button is clicked
document.getElementById('closeDialogBtn').addEventListener('click', () => {
    const dialog = document.getElementById('customDialog');
    dialog.close(); // Hide the dialog
});

