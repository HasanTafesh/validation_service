module.exports = {
  development: {
    username: 'postgres',
    password: 'admin',
    database: 'mydb',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'admin',
    database: 'mydb',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
