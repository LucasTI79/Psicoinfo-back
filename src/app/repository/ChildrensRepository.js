import execute from "../../database/connection";

export default {
  // async createUser(username, email, password, filename = 'user.png'){
  //   try{
  //     const query = `
  //     INSERT INTO tbUsers (username, email, pw, filename) VALUES ('${username}', '${email}', '${password}','${filename}');`;
  
  //    return await execute(query);
  //   }catch(err){
  //     console.log('err',err)
  //     throw new Error('Erro ao criar usuário')
  //   }
    
  // },

  async listChildrens(){
    // console.log('amigo estou aqui')
    try{
      const query = "SELECT * FROM tbChildrens JOIN tbUsers on tbUsers.id = tbChildrens.fk_parent;";
      console.log('executando query \n' + query)
      const childrens = await execute(query); 
      return childrens
    }catch(err){
      throw new Error('Erro ao listar crianças')
    }
   
  },

  async listChildrenById(id){
    try{
      const query = `SELECT * FROM tbChildrens JOIN tbUsers on tbUsers.id = tbChildrens.fk_parent where idChildren = '${id}'`;
      const user = await execute(query);
      return user
    }catch(err){
      throw new Error('Erro ao listar criança por id')
    }
    
  },

  async listChildrenByParentId(id){
    try{
      const query = `SELECT * FROM tbChildrens JOIN tbUsers on tbUsers.id = tbChildrens.fk_parent where fk_parent = '${id}'`;
      const user = await execute(query);
      return user
    }catch(err){
      throw new Error('Erro ao listar crianças por por id do parente')
    }
  },

  async listProgressByIdChildren(idChildren){
    try{
      const query = `
        SELECT 
          tbChildrens.nameChildren as 'Nome Criança',
            tbLevels.level as 'Game level',
            tbLevels.difficult as 'Dificuldade',
            tbGames.name as 'Jogo',
            tbGameCategory.name as 'Categoria',
            tbChildrensLevels.dateGame as 'Concluído em'
            FROM tbChildrensLevels
        JOIN tbChildrens ON tbChildrens.idChildren = tbChildrensLevels.fk_children
        JOIN tbLevels ON tbLevels.idLevel = tbChildrensLevels.fk_level
        JOIN tbGames ON tbGames.idGame = tbLevels.fk_game
        JOIn tbGameCategory on tbGameCategory.idCategory = tbGames.fk_category
        WHERE tbChildrens.idChildren = ${idChildren};
      `
      const progress = await execute(query);
      return progress
    }catch(err){
      throw new Error('Erro ao listar progresso das crianças por por id')
    }
   
  },

  async countProgressByIdChildren(idChildren){
    try{
      const query = `
      SELECT 
        tbChildrens.nameChildren AS 'Nome Criança',
        count(*) AS 'concluidos',
        tbGameCategory.name AS 'categoria',
        count(*) AS 'total'
        FROM tbChildrensLevels
        JOIN tbChildrens ON tbChildrens.idChildren = tbChildrensLevels.fk_children
        JOIN tbLevels ON tbLevels.idLevel = tbChildrensLevels.fk_level
        JOIN tbGames ON tbGames.idGame = tbLevels.fk_game
        JOIn tbGameCategory on tbGameCategory.idCategory = tbGames.fk_category
        WHERE tbChildrens.idChildren = ${idChildren} AND tbChildrensLevels.fk_children = ${idChildren}
        GROUP BY tbGameCategory.name;
      `
      const progress = await execute(query);
      return progress
    }catch(err){
      throw new Error('Erro ao listar progresso das crianças por por id')
    }
  },

  async countProgressChildrens(){
    try{
      const query = `
      SELECT 
        COUNT(tbLevels.level) AS 'concluidos',
            tbGames.name AS 'jogo'
        FROM tbChildrensLevels
        JOIN tbChildrens ON tbChildrens.idChildren = tbChildrensLevels.fk_children
        JOIN tbLevels ON tbLevels.idLevel = tbChildrensLevels.fk_level
        JOIN tbGames ON tbGames.idGame = tbLevels.fk_game
        JOIN tbGameCategory ON tbGameCategory.idCategory = tbGames.fk_category
        GROUP BY tbGames.idGame;
      `
      const progress = await execute(query);
      return progress
    }catch(err){
      throw new Error('Erro ao listar progresso das crianças por por id')
    }
  }
}