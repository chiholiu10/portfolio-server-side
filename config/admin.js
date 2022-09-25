module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '39d36fe91efbd15e7dfe14c76313379f'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c328c383da17a6ea6aed8fe58863c374'),
  },
});
