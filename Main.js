let GBase = null,
	accountInfo = {};
	
DOM.importAPI("https://genbuproject.github.io/Programs/Sync Helper/Sync Helper v1.1.js", function () {
	GBase = new GoogleAPI({
		ID: "107562519312-bbaa0fedfsd8nsob29fkbo3asu5eulnt.apps.googleusercontent.com",
		Key: atob("UlEzVjh0M1VjQXI2ODNLNDBNdTNadlhr"),
		Url: "https://genbuproject.github.io/Minecraft-Colonies-Shell/" //"http://localhost:8001/"
	});

	(function () {
		let LoopCount = 0;

		let Looper = setInterval(function () {
			if (GBase.hasLogined()) {
				clearInterval(Looper);

				accountInfo = GBase.getUserInfo();
				DOM("#AccountName").textContent = accountInfo.displayName;
			}
		}, 1000);
	})();
});

window.addEventListener("DOMContentLoaded", function () {
	DOM('@*[UUID="Handler__SignIn"]').forEach(function (Elem, Index, Parent) {
		Elem.addEventListener("click", function () {
			if (!GBase.hasLogined()) {
				if (!navigator.isMobile()) {
					GBase.loginOnDialog(GoogleAPI.SCOPE.PLUS);
				} else {
					GBase.login(GoogleAPI.SCOPE.PLUS);
				}
			} else {

			}
		});
	});

	DOM('@A:not([UUID="Handler__SignIn"])').forEach(function (Elem, Index, Parent) {
		Elem.addEventListener("click", function (Event) {
			Event.preventDefault();
			window.parent.DOM("@IFrame.mdl-layout__content")[0].src = Event.target.href;
		});
	});
});

window.addEventListener("DOMNodeInserted", function (Event) {
	if (Event.target.nodeName == "A") {
		Event.preventDefault();
		window.parent.DOM("@IFrame.mdl-layout__content")[0].src = Event.target.href;
	}
});
