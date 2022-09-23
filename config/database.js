const path = require('path');
const { config } = require('process');

module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password
        },
        ssl: {
          rejectUnauthorized: false,
        }
      },
      debug: false
    };
  }
  return {
    connection: {
      client: 'postgres',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};
