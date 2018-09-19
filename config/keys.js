"use strict"
const {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_ID
} = process.env;

module.exports = {
  mongoURI: `${DB_NAME}://${DB_USER}:${DB_PASS}@${DB_ID}`
}