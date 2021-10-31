export default {
  createUser(username, email, password){
    const query = `
    INSERT INTO tbUsers (nome, email, senha) VALUES ('${username}', '${email}', '${password}');
  `;

   const user = database.execute(query);
   return user
  },

  listUsers(){
    const query = "SELECT * FROM tbUsers";

   const users = database.execute(query);
   return users
  }
}