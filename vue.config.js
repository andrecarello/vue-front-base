module.exports = {
  css: {
    loaderOptions: {
      sass: {
				prependData: `
					@import "@/styles/core/_settings.scss";
					@import "@/styles/core/_functions.scss";
					@import "@/styles/core/_mixins.scss";
				`
      }
    }
  }
};
