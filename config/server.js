module.exports = ({ env }) => ({
  // host: env('HOST', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  url: "https://strapi-todo.azurewebsites.net",
  admin: {
    url: "https://strapi-todo.azurewebsites.net",
    serveAdminPanel: true,
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
