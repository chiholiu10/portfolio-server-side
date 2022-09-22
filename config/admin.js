module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c328c383da17a6ea6aed8fe58863c374'),
  },
});
