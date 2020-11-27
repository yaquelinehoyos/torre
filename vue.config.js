module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
          @import "./src/CSS/styles.scss";
        `
            }
        }
    }
};