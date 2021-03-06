import execute from "../../database/connection";

export default {
  async createUser(username, email, password, filename = 'user.png'){
    try{
      const query = `
      INSERT INTO tbUsers (username, email, pw, filename) VALUES ('${username}', '${email}', '${password}','${filename}');`;
  
     return await execute(query);
    }catch(err){
      console.lo
      let erro;
      throw erro    }
    
  },

  async listUsers(){
    // console.log('amigo estou aqui')
    try{
      const query = "SELECT id, username, email FROM tbUsers";
      const users = await execute(query); 
      return users
    }catch(err){
      let erro;
      throw erro = "Erro ao listar usuários"
    }
   
  },

  async listUserById(id){
    try{
      const query = `SELECT * FROM tbUsers where id = '${id}'`;
      const user = await execute(query);
      return user
    }catch(err){
      let erro;
      throw erro = "Erro ao listar usuário por id"
    }
    
  },

  async listUserByEmail(email){
    try{
      const query = `SELECT * FROM tbUsers where email = '${email}' LIMIT 1`;
      const user = await execute(query);
      return user
    }catch(err){
      let erro;
      throw erro = "Erro ao listar usuário por id"
    }
  },

  async listUserByToken(token){
    try{
      const query = `SELECT * FROM tbUsers where passwordResetToken = '${token}' LIMIT 1`;
      const user = await execute(query);
      return user
    }catch(err){
      let erro;
      throw erro = 'Erro ao listar usuário por id'
    }
  },

  async authenticate(email, password){
    try{
      const query = `SELECT * FROM tbUsers where email = '${email}' and pw = '${password}'`;
      // console.log('query',query)
      const user = await execute(query);
      // console.log('userRepository', user)
      return user
    }catch(err){
      let erro;
      throw erro = 'Erro ao autenticar'
    }
    
  },

  async setToken(id,token, date){
    try{
      const query = `UPDATE tbUsers SET passwordResetToken = '${token}', passwordResetExpires = '${date}' where id = '${id}'`;
      console.log('query',query);
      return await execute(query);
    }catch(err){
      let erro;
      throw erro = "Erro ao alterar o token do usuário"
    }
  },

  async resetPassword(token, password){
    try{
      const query = `UPDATE tbUsers SET pw = '${password}' where passwordResetToken = '${token}'`;
      return await execute(query);
    }catch(err){
      let erro;
      throw erro = "Erro ao alterar a senha"
    }
  }
}