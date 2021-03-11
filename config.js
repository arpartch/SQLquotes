const env = process.env;

const config = {
  db: { 
    host: env.DB_HOST || 'kashin.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'ifnsvlab',
    password: env.DB_PASSWORD || 'QI68eYGqXKrUFWsikVbV1DyTuTrqkJmn',
    database: env.DB_NAME || 'ifnsvlab',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;