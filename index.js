if ("sericeWroker" in navigator) {
	window.addEventListener("load", function () {
		this.navigator.serviceWorker
			.register("/serviceWorker.js")
			.then((res) =>
				console
					.log("service worker registered")
					.catch((error) =>
						console.log("service worker not registered: ", error)
					)
			);
	});
}

let installationPromptEvent;

window.addEventListener("beforeinstallprompt", (event) => {
	event.preventDefault();
	installationPromptEvent = event;

	event.userChoice.then((result) => console.log(result.outcome));
});

document
	.getElementById("installPromptBtn")
	.addEventListener("click", (event) => {
		console.log("Installatio prompt clicked");

		if (installationPromptEvent) installationPromptEvent.prompt();
		else {
			alert("installation prompt not available ? ");
		}
	});
