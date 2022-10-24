module.exports = ({ env }) => ({
  url: env(MY_HEROKU_URL),
  proxy: true,
  app: {
    key: env.array('APP_KEYS', [APP_KEYS])
  }
})