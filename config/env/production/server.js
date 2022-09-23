module.exports = ({ env }) => ({
  url: env('https://portfolioserverside.herokuapp.com/'),
  proxy: true,
  app: {
    key: env.array('APP_KEYS', ['SDrv5PIa5w9OfJlUUITNaQ==,RNmhohRP/7PVZq/IPfe/aw==,9RlKrzx+61wyupmLBxuPjw==,AKUnfz4BzfC3iew8ocvdIg=='])
  }
})