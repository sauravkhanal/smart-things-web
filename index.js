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
