const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

module.exports =
{
 development: {
   username:process.env.DB_USER,
   password:process.env.DB_PASSWORD,
   database:process.env.DB_NAME,
   host:process.env.DB_HOST,
   port:process.env.DB_PORT,
   dialect:"postgres",
  },
}
