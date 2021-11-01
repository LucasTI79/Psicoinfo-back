export const config = {
  type: "mysql",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "psicoinfo",
  synchronize: false,
  entities: [
      require("./entity/Post"),
      require("./entity/Category")
  ]
}