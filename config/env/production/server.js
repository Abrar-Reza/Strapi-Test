module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://strapi-todo.azurewebsites.net",
    admin: {
      url: "https://happy-bay-086e8680f.1.azurestaticapps.net",
      serveAdminPanel: true,
    },
});