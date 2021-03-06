require("dotenv").config();

export default {
  components: true,
  target: "static",
  modules: ["@nuxt/http"],
  buildModules: ["@nuxtjs/dotenv"],
  plugins: ["~/plugins/audio.client.js", "~/plugins/bus.client.js"],
  css: ["~/css/main.css"],
  http: {
    browserBaseURL: process.env.SPACES_CDN_ENDPOINT,
    baseURL: process.env.SPACES_ENDPOINT,
  },
  env: {
    SPACES_CDN_ENDPOINT: process.env.SPACES_CDN_ENDPOINT,
  },
  head: {
    title: "memebot",
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  },
};
