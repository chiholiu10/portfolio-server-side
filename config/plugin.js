module.exports = ({ env }) => ({
  //
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 100,
      apolloServer: {
        tracing: true,
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
  },
});