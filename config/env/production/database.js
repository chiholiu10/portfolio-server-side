const path = require('path');
const parse = require('pg-connection-string').parse;
const { config } = parse(process.env.DATABASE_URL);

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
