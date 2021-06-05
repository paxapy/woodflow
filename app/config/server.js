module.exports = ({ env }) => ({
  host: env('HOST', env.HOST),
  port: env.int('PORT', env.PORT),
  url: env('API_URL', env.API_URL),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', env.ADMIN_JWT_SECRET),
    },
  },
});
