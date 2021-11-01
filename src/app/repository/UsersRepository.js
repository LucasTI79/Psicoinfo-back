import execute from "../../database/connection";

export default {
  async createUser(username, email, password){
    const query = `
    INSERT INTO tbUsers (username, email, pw) VALUES ('${username}', '${email}', '${password}');
  `;

   return await execute(query);
  },

  async listUsers(){
    // console.log('amigo estou aqui')
    const query = "SELECT * FROM tbUsers";
    const users = await execute(query); 
    return users
  },

  async listUserById(id){
    const query = `SELECT * FROM tbUsers where id = '${id}'`;
    const user = await execute(query);
    return user
  },

  async listUserByEmail(email){
    const query = `SELECT * FROM tbUsers where email = '${email}'`;

    const user = await execute(query);
    return user
  },

  async authenticate(email, password){
    const query = `SELECT * FROM tbUsers where email = '${email}' and pw = '${password}'`;

    const user = await execute(query);
    return user
  }
}