import UsersRepository from "../repository/UsersRepository"

export default async function handle(username, email, password){
  if(username && email && password){
    try{
      const userAlreadyExists = await UsersRepository.listUserByEmail(email);
      if(userAlreadyExists.lenght > 0){
        throw new Error("Email já está em uso")
      }
      return await UsersRepository.createUser(username, email, password)
    }catch(err){
      throw new Error("Email já está em uso")
    }
  }else{
    throw new Error("Insira todos os valores solicitados");
  }
} 