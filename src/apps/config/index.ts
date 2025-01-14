/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  gen_salt: process.env.GEN_SALT,
  secret: process.env.SECRET,
}
