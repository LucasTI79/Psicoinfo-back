import execute from "../../database/connection";

export default {
  async createUser(username, email, password){
    try{
      const query = `
      INSERT INTO tbUsers (username, email, pw) VALUES ('${username}', '${email}', '${password}');
    `;
  
     return await execute(query);
    }catch(err){
      throw new Error('Erro ao criar usuário')
    }
    
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
    const query = `SELECT * FROM tbUsers where email = '${email}' LIMIT 1`;
    const user = await execute(query);
    return user
  },

  async authenticate(email, password){
    try{
      const query = `SELECT * FROM tbUsers where email = '${email}' and pw = '${password}'`;

      const user = await execute(query);
      return user
    }catch(err){
      throw new Error('Erro ao autenticar')
    }
    
  },

  async setToken(id,token, date){
    try{
      const query = `UPDATE tbUsers SET passwordResetToken = '${token}', passwordResetExpires = '${date}' where id = '${id}'`;
      return await execute(query);
    }catch(err){
      throw new Error('Erro ao alterar o token do usuário')
    }
  },

  async resetPassword(id, email, token, password){
    try{
      const query = `UPDATE tbUsers SET pw = '${password}' where id = '${id}' and email = '${email}' and passwordResetToken = '${token}'`;
      return await execute(query);
    }catch(err){
      throw new Error('Erro ao alterar a senha')
    }
  }
}