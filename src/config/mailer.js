import { config } from 'dotenv';
config({  
  path: process.env.NODE_ENV === "development" ? ".env.development" : ".env.production"
})

export default {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS
}