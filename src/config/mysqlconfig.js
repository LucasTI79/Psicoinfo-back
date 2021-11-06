import { config } from 'dotenv';
config({  
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env.production"
})

export const mySqlConfig = {
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
};