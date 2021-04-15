const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html",
            chunks: ["chunk-vendors", "chunk-common", "index"],
        },
    },
    configureWebpack: () => {
        if (process.env.NODE_ENV === "production" && process.env.CI !== "true") {
            return {
                plugins: [
                    new PrerenderSPAPlugin({
                        staticDir: path.join(__dirname, "dist"),
                        routes: ["/"],
                        renderer: new Renderer({
                            headless: true,
                        }),
                    }),
                ],
            };
        }
    },
};