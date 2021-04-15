const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
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