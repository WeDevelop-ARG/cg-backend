require('dotenv').config()

module.exports = () => {
  return {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: (process.env.NODE_ENV === 'test' && !process.env.SEQUELIZE_LOG)
      ? false
      : console.log,
    define: {
      freezeTableName: true
    }
  }
}
