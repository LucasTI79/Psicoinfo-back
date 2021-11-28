import UsersRepository from "../repository/UsersRepository"

export default async function handle(username, email, password, filename){
  if(username && email && password){
    try{
      const userAlreadyExists = await UsersRepository.listUserByEmail(email);
      if(userAlreadyExists.length > 0){
        throw new Error("Email já está em uso")
      }else{
        return await UsersRepository.createUser(username, email, password, filename)
      }
    }catch(err){
      throw new Error(err);
    }
  }else{
    throw new Error("Insira todos os valores solicitados");
  }
} 